import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const response = NextResponse.redirect(`${baseUrl}/login`);

  response.cookies.set("token", "", { path: "/", expires: new Date(0) });
  response.cookies.set("userId", "", { path: "/", expires: new Date(0) });

  return response;
}