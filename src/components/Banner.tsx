"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Banner() {
  const bannerList: string[] = ["cover", "cover2", "cover3", "cover4"];
  const [banner, setBanner] = useState<number>(0);
  const router = useRouter();

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

      <button
        onClick={(e) => {
          e.stopPropagation();
          router.push("/venue");
        }}
        className="absolute bottom-4 right-4 py-2 px-4 rounded-lg text-white font-jetbrains bg-[rgba(255,255,255,0.1)] backdrop-blur-sm backdrop-saturate-100 border-solid border-[1px] border-[rgba(255,255,255,0.2)] hover:border-[3px] transition-all duration-75"
      >
        Select Venue
      </button>
    </div>
  );
}
