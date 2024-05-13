import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hi Isuru</h1>
      <Link href={"/about"}>Go to about page</Link>
      <br />
      <Link href={"/users"}>Go to Users page</Link>
    </main>
  );
}
