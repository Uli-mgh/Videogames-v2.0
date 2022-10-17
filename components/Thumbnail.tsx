import Image from "next/image";
import { Games } from "../typings";

type Props = {
  game: Games;
  // game: Games | DocumentData;
};

const Thumbnail = ({ game }: Props) => {
  return (
    <div className="relative h-20 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={game?.image}
        layout="fill"
        className="rounded-sm object-cover md:rounded"
      />
    </div>
  );
};

export default Thumbnail;
