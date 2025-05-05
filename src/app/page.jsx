import HomeHeader from "@/components/HomeHeader";
import React from "react";
import Image from "next/image";
import HomeSearch from "@/components/HomeSearch";

export default function Home() {
  return (
    <>
      {/* header section  */}
      <HomeHeader />

      {/* Body section  */}
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          width={300}
          height={100}
          alt="Google Logo"
        />
        <HomeSearch />
      </div>

      {/* Footer section */}
    </>
  );
}
