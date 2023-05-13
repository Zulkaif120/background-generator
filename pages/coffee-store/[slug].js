import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Slug() {
  const router = useRouter();
  console.log("Router", router.query);
  return (
    <div>
      Slug page, Router id: {router.query.slug}
      <Link href="/">Back to home</Link>
    </div>
  );
}

export default Slug;
