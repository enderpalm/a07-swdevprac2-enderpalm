import React from "react";
import Image from "next/image";

const VenueDetailPage = ({ params }: { params: { vid: string } }) => {
  const mockVenueRepo = new Map();
  mockVenueRepo.set("001", {
    name: "The Bloom Pavilion",
    image: "/img/bloom.jpg",
  });
  mockVenueRepo.set("002", {
    name: "Spark Space",
    image: "/img/sparkspace.jpg",
  });
  mockVenueRepo.set("003", {
    name: "The Grand Table",
    image: "/img/grandtable.jpg",
  });

  return (
    <main className="flex flex-wrap justify-center gap-2 m-4">
      <div className="w-80 rounded-t-lg overflow-hidden relative aspect-[3/2]">
        <Image
          src={mockVenueRepo.get(params.vid).image}
          alt={mockVenueRepo.get(params.vid).name}
          fill
          className="object-cover"
        />
      </div>
			<h1 className="font-anuphan font-medium text-2xl m-4">
				{mockVenueRepo.get(params.vid).name}
			</h1>
    </main>
  );
};

export default VenueDetailPage;
