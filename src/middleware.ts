import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("from middleware");
  const apiKeyFromHeader = request.headers.get("x-api-key");

  if (apiKeyFromHeader !== process.env.API_KEY) {
    return NextResponse.error();
  }
}

