import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes (except /admin/login)
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const token = request.cookies.get("admin-token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    const isValid = await verifyToken(token);
    if (!isValid) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // Protect write operations on /api/projects
  if (pathname.startsWith("/api/projects") && request.method !== "GET") {
    const token = request.cookies.get("admin-token")?.value;

    if (!token || !(await verifyToken(token))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/projects/:path*"],
};
