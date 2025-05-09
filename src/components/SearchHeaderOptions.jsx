"use client";

import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchTerm = searchParams.get("SearchTerm");

  const selectTab = (tab) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm${searchTerm}`
    );
  };

  return (
    <div className="flex space-x-2 select-none border-b-1 w-full justify-center lg:justify-start lg:pl-46 text-gray-700 text-sm pl-4">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-2 pb-3 px-2 cursor-pointer ${
          pathname === "/search/web"
            ? "text-blue-600 !border-blue-600"
            : "border-transparent"
        }`}
      >
        <IoMdSearch className="text-md hidden sm:inline-flex text-blue-500" />
        <span>All</span>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-2 pb-3 px-2 cursor-pointer ${
          pathname === "/search/image"
            ? "text-blue-600 !border-blue-600"
            : "border-transparent"
        }`}
      >
        <FaCamera className="text-md hidden sm:inline-flex text-blue-500" />
        <span>Images</span>
      </div>
    </div>
  );
}
