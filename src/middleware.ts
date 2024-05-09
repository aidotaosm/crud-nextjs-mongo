import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const apiKeyFromHeader = request.headers.get("x-api-key");

  if (apiKeyFromHeader !== process.env.API_KEY) {
    return NextResponse.error();
  }
}

export const config = {
  matcher: '/api/',
}