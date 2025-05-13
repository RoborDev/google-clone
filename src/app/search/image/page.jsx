export const dynamic = "force-dynamic";

import Link from "next/link";
import ImageSearchResults from "@/components/ImageSearchResult";

export default async function ImageSearchPage({ searchParams }) {
  const searchTerm = searchParams?.searchTerm || "";
  const startIndex = searchParams.start || "1";

  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`,
    { cache: "no-store" }
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
        <p className="text-lg">
          Try searching something else or go back to homepage.{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return results && <ImageSearchResults results={data} />;
}
