import React from "react";
import Link from "next/link";
import VideoSearchResults from "@/components/VideoSearchResults";

export default async function VideoSearchPage({ searchParams }) {
  const searchTerm = searchParams?.searchTerm || "";
  // const startIndex = searchParams.start || "1";

  if (!searchTerm) {
    return <div className="p-10 text-center">Please enter a search term.</div>;
  }

  await new Promise((resolve) => setTimeout(resolve, 5000));

  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=site:youtube.com ${searchParams.searchTerm}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.items;

  if (!results || results.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-center pb-4 text-3xl">No results found</h1>
        <p className="text-lg">
          Try searching something else or go back to homepage.{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <VideoSearchResults results={data} />;
}
