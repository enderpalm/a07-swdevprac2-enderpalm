"use client";

import Image from "next/image";
import { useState } from "react";

export default function Banner() {
  const bannerList: string[] = ["cover", "cover2", "cover3", "cover4"];
  const [banner, setBanner] = useState<number>(0);

  return (
    <div className="flex m-0 w-full h-[60vh] relative justify-center items-center">
      <Image
        src={`/img/${bannerList[banner]}.jpg`}
        alt="event hero background"
        fill
        objectFit="cover"
        priority
        className="block w-full h-full object-cover brightness-50"
        onClick={() =>
          setBanner((prevBanner) => (prevBanner + 1) % bannerList.length)
        }
      />
      <div className="flex flex-col justify-center gap-4 items-center w-[75%] h-full m-16 z-10 pointer-events-none">
        <h1 className="text-white p-0 m-0 font-ubuntu text-center text-5xl">
          where every event finds its venue
        </h1>
        <h2 className="font-jetbrains text-base text-gray-100">
          ■ Discover the perfect space for every occasion — simple, fast, and
          tailored to your needs.
        </h2>
      </div>
    </div>
  );
}
