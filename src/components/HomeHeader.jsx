import React from "react";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import { PiFlaskFill } from "react-icons/pi";

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href={"https://mail.google.com"} className="hover:underline mx-2">
          Gmail
        </Link>
        <Link
          href={"https://umage.google.com"}
          className="hover:underline mx-2"
        >
          Images
        </Link>
        <PiFlaskFill className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />

        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
}
