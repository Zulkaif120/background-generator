import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";

function DynamicRoute() {
  const router = useRouter();
  const id = router.query;
  return (
    <>
      <Head>
        <title>{id.id}</title>
      </Head>
      <div>Page {id.id}</div>
    </>
  );
}

export default DynamicRoute;
