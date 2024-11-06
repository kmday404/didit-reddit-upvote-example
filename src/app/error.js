"use client";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <div>
      <h2>Oh no! Something went wrong</h2>

      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
      <br />
      <Link href="/">Go Home</Link>
    </div>
  );
}

// //we are going to refresh the data in the /coasters page
// revalidatePath("/coasters");
// //we are going to redirect the user to the /coasters page
// redirect("/coasters");
