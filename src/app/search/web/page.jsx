import React from "react";
import Link from "next/link";

export default async function WebSearchPage({ searchParams }) {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-center pb-4 text-3xl">No results found</h1>
        <p className="text-lg ">
          Try searching something else or go back to homepage. {""}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  const searchTerm = searchParams?.searchTerm || "default search";

  return (
    <div>
      {results &&
        results.map((result) => <h1 key={result.link}>{result.title}</h1>)}
    </div>
  );
}
