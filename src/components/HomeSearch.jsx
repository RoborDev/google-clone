"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoSearchSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";

export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const res = await fetch(" https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!res) return;
    router.push(`/search/web?searchTerm=${res}`);
    setRandomSearchLoading(false);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex w-full mt-5 mx-auto border border-gray-200 rounded-full px-5 py-3 hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-full"
      >
        <IoSearchSharp className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="w-full focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <FaMicrophone className="text-lg" />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-6">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <img
              src="spinner.svg"
              alt="loading..."
              className="h-6 text-center"
            />
          ) : (
            "I am feeling lucky"
          )}
        </button>
      </div>
    </div>
  );
}
