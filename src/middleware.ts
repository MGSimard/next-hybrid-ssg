import { NextResponse, type NextRequest } from "next/server";

export default function authMiddleware(request: NextRequest) {
  // This is where we would implement our auth middleware
  // Our other option is page-level auth in every dashboard page (layout-level auth is unsafe)

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
