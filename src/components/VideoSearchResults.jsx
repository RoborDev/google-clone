import React from "react";
import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

export default function VideoSearchResults({ results }) {
  if (!results?.items) return null;

  return (
    <div className="pb-24 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 gap-6">
        {results.items.map((result) => {
          const thumbnail =
            // eslint-disable-next-line no-undef
            result.pagemap?.cse_thumbnail?.[0]?.src || "/no-thumbnail.jpg";
          const title = result.title;
          const link = result.link;
          const displayLink = result.displayLink;

          return (
            <div key={link} className="mb-8">
              <div className="group">
                <Link href={link}>
                  <img
                    src={thumbnail}
                    alt={title}
                    className="group-hover:shadow-xl w-full object-cover h-60 transition-shadow"
                  />
                </Link>

                <Link href={link}>
                  <h2 className="group-hover:underline truncate text-xl mt-2">
                    {title}
                  </h2>
                </Link>

                <Link href={link}>
                  <p className="group-hover:underline text-gray-600">
                    {displayLink}
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <PaginationButtons />
    </div>
  );
}
