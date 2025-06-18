import { NextResponse, type NextRequest } from "next/server";

export default function authMiddleware(request: NextRequest) {
  /** Handle auth redirects here
   * - If user visits sign-in while signed-in, redirect to dashboard
   * - If user visits dashboard while signed-out, redirect to sign-in
   */

  /** WE DO NOT HANDLE AUTH HERE
   * - This is just an early-return for routing
   * - Nextjs "middleware" is not accurate to traditional middleware
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
  matcher: ["/dashboard/:path*"],
};
