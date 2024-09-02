import { fetchMetadata,
} from "frames.js/next";
import Head from "next/head";

import {
  metadataToMetaTags,
} from "frames.js/next/pages-router/client";
 
export async function generateMetadata() {
  return {
    title: "My Page",
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
      new URL(
        "/frames",
        process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000"
      )
    ),
  };
}
 
export default function Page() {
  return<> <Head>
  <title>Meme Coin Launcher</title>
</Head>
<span>My existing page</span>;

</> }