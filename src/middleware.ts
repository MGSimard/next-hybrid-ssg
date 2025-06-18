import { NextResponse, type NextRequest } from "next/server";

export default function authMiddleware(request: NextRequest) {
  /** Handle auth redirects here
   * - Naturally we don't need this if we have our own middleware on server
   * - If user visits sign-in while signed-in, redirect to dashboard
   * - If user visits dashboard while signed-out, redirect to sign-in
   * - (This is obviously not implemented yet)
   */

  /** WE DO NOT HANDLE AUTH HERE
   * - "Why not?"
   *   - Read CVE-2025-29927
   *   - It is request-blocking
   *   - Edge runtime has limited API support (Though there is experimental node runtime on canary)
   * - Nextjs "middleware" is not accurate to traditional middleware
   * - This is just an early-return for routing
   */

  /** NOTES: EXPERIMENTAL
   * - Unauthorized route catcher is experimental when throwing unauthorized()
   * - https://nextjs.org/docs/app/api-reference/functions/unauthorized
   * - https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized
   * - This would let us shorthand top-level auth checks in pages, like:
   * - session = await verifySession()
   * - if (!session) { unauthorized() }
   */

  return NextResponse.next();
}

export const config = {
  matcher: ["/sign-in", "/dashboard/:path*"],
};
