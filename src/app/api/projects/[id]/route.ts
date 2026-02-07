import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { projectSchema } from "@/lib/validations";
import { slugify } from "@/lib/utils";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const project = await prisma.project.findUnique({ where: { id } });

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json({
    ...project,
    techTags: JSON.parse(project.techTags),
  });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const validated = projectSchema.parse(body);

    const project = await prisma.project.update({
      where: { id },
      data: {
        ...validated,
        slug: slugify(validated.name),
        techTags: JSON.stringify(validated.techTags),
        thumbnailUrl: validated.thumbnailUrl || null,
        liveUrl: validated.liveUrl || null,
        githubUrl: validated.githubUrl || null,
      },
    });

    revalidatePath("/");

    return NextResponse.json({
      ...project,
      techTags: JSON.parse(project.techTags),
    });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ error: "Validation failed", details: error }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.project.delete({ where: { id } });

    revalidatePath("/");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
