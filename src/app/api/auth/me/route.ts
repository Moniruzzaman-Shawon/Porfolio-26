import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin-token")?.value;

  if (!token) {
    return NextResponse.json({ authenticated: false });
  }

  const valid = await verifyToken(token);
  return NextResponse.json({ authenticated: valid });
}
