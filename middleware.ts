import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const path = req.nextUrl.pathname;

  if (token && path !== "/logout") {
    return NextResponse.redirect("http://localhost:3001");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/register", "/logout"],
};