import React from "react";
import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

export default function WebSearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl[52%] ">
      <p className="text-gray-600 text-sm mb-5 mt-3 px-1">
        About {results?.searchInformation?.formattedTotalResults} results for (
        {results?.searchInformation?.formattedSearchTime} seconds)
      </p>
      <div className="flex flex-col space-y-6 mt-5">
        {results?.items?.map((result) => (
          <div key={result.link} className="max-w-xl mb-8">
            <div className="group flex flex-col">
              <Link href={result.link} className="text-sm truncate">
                {result.formattedUrl}
              </Link>

              <Link
                href={result.link}
                className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
              >
                {result.title}
              </Link>
            </div>
            <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
          </div>
        ))}
      </div>
      <PaginationButtons />
    </div>
  );
}
