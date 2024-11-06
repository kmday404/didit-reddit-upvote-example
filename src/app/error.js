"use client";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <div>
      <h2>Oh no! Something went wrong</h2>

      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
      {/* <br />
      <Link href="/">Go Home</Link> */}
    </div>
  );
}
