"use client";

import React, { useReducer } from "react";
import Card from "./Card";

const CardPanel = () => {
  const ratingReducer = (
    ratingMap: Map<string, number>,
    action: { type: string; venueName: string; rating: number }
  ) => {
    const newRatingMap = new Map(ratingMap);
    switch (action.type) {
      case "add":
        newRatingMap.set(action.venueName, action.rating??0);
        return newRatingMap;
      case "remove":
        newRatingMap.delete(action.venueName);
        return newRatingMap;
      default:
        return ratingMap;
    }
  };
  const defaultRating = new Map<string, number>([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0],
  ]);
  const [ratingMap, dispatchRatingChange] = useReducer(
    ratingReducer,
    defaultRating
  );
  const setterFunction = (venue: string, rating: number) =>
    dispatchRatingChange({ type: "add", venueName: venue, rating: rating });
  return (
    <>
      <section className="m-1 flex flex-wrap gap-2">
        <Card
          venueName="The Bloom Pavilion"
          imgSrc="/img/bloom.jpg"
          onRatingChange={setterFunction}
        />
        <Card
          venueName="Spark Space"
          imgSrc="/img/sparkspace.jpg"
          onRatingChange={setterFunction}
        />
        <Card
          venueName="The Grand Table"
          imgSrc="/img/grandtable.jpg"
          onRatingChange={setterFunction}
        />
      </section>
			<section className="m-1 p-4">
				<h2 className="font-jetbrains font-semibold bg-black text-white w-fit px-2 py-1">Venue with Ratings {ratingMap.size}</h2>
				<ul className="font-jetbrains my-2">
					{Array.from(ratingMap).map(([venue, rating]) => (
						<li key={venue} onClick={() => dispatchRatingChange({ type: "remove", venueName: venue, rating: 0 })} data-testid={venue}>
							{venue}: {<b>{rating}</b>}
						</li>
					))}
				</ul>
			</section>
    </>
  );
};

export default CardPanel;
