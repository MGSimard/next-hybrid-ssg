export default function Page() {
  /** NOTES: EXPERIMENTAL
   * - Unauthorized route catcher is experimental when throwing unauthorized()
   * - https://nextjs.org/docs/app/api-reference/functions/unauthorized
   * - https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized
   * - This would let us shorthand top-level auth checks in pages, like:
   * - session = await verifySession()
   * - if (!session) { unauthorized() }
   */

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  );
}
