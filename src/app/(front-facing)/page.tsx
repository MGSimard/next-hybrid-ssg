import Link from "next/link";

export default function PageHome() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/dashboard">Dashboard Link</Link>
    </main>
  );
}
