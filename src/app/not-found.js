import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <h1>NOT FOUND</h1>
      <h2>Are you lost?</h2>
      <p>We can help you</p>
      <Link href="/">Go Home</Link>
      {/* <Image
        src="https://images.unsplash.com/photo-1510133768164-a8f7e4d4e3dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hand reaching out of a field"
        width={400}
        height={300}
      /> */}
    </>
  );
}
