import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { projectSchema } from "@/lib/validations";
import { slugify } from "@/lib/utils";

export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: { order: "asc" },
  });

  const parsed = projects.map((p) => ({
    ...p,
    techTags: JSON.parse(p.techTags),
  }));

  return NextResponse.json(parsed);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = projectSchema.parse(body);

    const project = await prisma.project.create({
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

    return NextResponse.json(
      { ...project, techTags: JSON.parse(project.techTags) },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ error: "Validation failed", details: error }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
