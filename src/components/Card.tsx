import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

interface Props {
  venueName: string;
  imgSrc: string;
  onRatingChange: Function;
}

export default function Card({ venueName, imgSrc, onRatingChange }: Props) {
  const robotId = `${venueName} Rating`;
  return (
    <InteractiveCard>
      <div className="w-full rounded-t-lg overflow-hidden relative aspect-[3/2]">
        <Image
          src={imgSrc}
          alt={`${venueName} image`}
          fill
          className="object-cover"
        />
      </div>
      <div className="m-4 flex-col flex gap-2">
        <h2 className="font-anuphan font-semibold">{venueName}</h2>
        <Rating
          id={robotId}
          name={robotId}
          data-testid={robotId}
          defaultValue={0}
          precision={1}
          onClick={(event) => event.stopPropagation()}
          onChange={(_, value) => onRatingChange(venueName, value)}
        />
      </div>
    </InteractiveCard>
  );
}
