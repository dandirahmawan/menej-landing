import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log(token, "token trace middleware");
  const path = req.nextUrl.pathname;
  console.log(path, "pathname"); // <-- ini bekerja

  if (token && path !== "/logout") {
    return NextResponse.redirect("http://localhost:3001");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/register", "/logout"],
};