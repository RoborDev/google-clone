"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { FaMicrophone } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("SearchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  const router = useRouter();

  const clearInput = () => {
    setTerm("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center "
      onSubmit={handleSubmit}
    >
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        className="w-full focus:outline-none "
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={clearInput}
      />
      <FaMicrophone className="hidden sm:inline-flex text-3xl text-blue-500 pl-4 border-l mr-3 border-gray-300" />

      <IoMdSearch
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer "
        onClick={handleSubmit}
      />
    </form>
  );
}
