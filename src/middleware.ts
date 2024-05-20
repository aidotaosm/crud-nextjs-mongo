import { IM_Fell_French_Canon } from "next/font/google";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const apiKeyFromHeader = request.headers.get("x-api-key");

  if (request.method !== "OPTIONS" && apiKeyFromHeader !== process.env.NEXT_PUBLIC_API_KEY) {
    return NextResponse.json({ message: "Invalid API key" }, { status: 400 });
  }

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
  }

  if(request.method === "OPTIONS") return NextResponse.json({}, { headers: corsHeaders });
}

export const config = {
  matcher: "/api/:path*",
};
