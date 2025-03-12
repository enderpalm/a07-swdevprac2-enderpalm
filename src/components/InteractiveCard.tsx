"use client";
import React from "react";

const InteractiveCard = ({ children }: { children: React.ReactNode }) => {
  const changeClass = (
    event: React.SyntheticEvent,
    from: string,
    to: string
  ) => {
    event.currentTarget.classList.remove(from);
    event.currentTarget.classList.add(to);
  };

  const onCardMouseAction = (event: React.SyntheticEvent) => {
    if (event.type === "mouseover") {
      changeClass(event, "bg-white", "bg-neutral-200");
      changeClass(event, "shadow-lg", "shadow-2xl");
    } else {
      changeClass(event, "bg-neutral-200", "bg-white");
      changeClass(event, "shadow-2xl", "shadow-lg");
    }
  };

  return (
    <div
      className="bg-white shadow-lg rounded-lg m-3 w-64 h-72"
      onMouseOver={(e) => onCardMouseAction(e)}
      onMouseOut={(e) => onCardMouseAction(e)}
    >
      {children}
    </div>
  );
};

export default InteractiveCard;
