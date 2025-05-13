"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React from "react";
import Link from "next/link";

export default function PaginationButtons() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  const pathname = usePathname();
  const startIndex = +searchParams.get("start") || 1;

  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline text-blue-500">
            <FaArrowLeft className="h-5" />
            <span>Previous</span>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline text-blue-500">
            <FaArrowRight className="h-5" />
            <span>Next</span>
          </div>
        </Link>
      )}
    </div>
  );
}
