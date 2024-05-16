import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const apiKeyFromHeader = request.headers.get("x-api-key");

  const response = new NextResponse();

  // if (apiKeyFromHeader !== process.env.NEXT_PUBLIC_API_KEY) {
  //   return NextResponse.json({ message: "Invalid API key" }, { status: 400 });
  // }

  const newHeader = new Headers();
  newHeader.append("Access-Control-Allow-Credentials", "true");
  newHeader.append("Access-Control-Allow-Origin", "*");
  newHeader.append("Access-Control-Allow-Methods", "*");
  newHeader.append("Access-Control-Allow-Headers",  "*");

  return NextResponse.next({
    request: {
      headers: newHeader,
    },
  })
}

export const config = {
  matcher: "/api/:path*",
};
