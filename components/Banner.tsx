import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Games } from "../typings";

import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";

interface Props {
  allGames: Games[];
}

const baseUrl = "https://api.rawg.io/api/games";
const Banner = ({ allGames }: Props) => {
  const [game, setGame] = useState<Games | null>(null);

  useEffect(() => {
    setGame(allGames[Math.floor(Math.random() * allGames.length)]);
  }, [allGames]);

  // console.log(game);
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 ">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <img
          src={`${game?.image}`}
          alt=""
          loading="lazy"
          className="object-fill lg:h-3/4 w-full "
        />
      </div>

      <h1 className="text-2xl lg:text-7xl md:text-4xl font-bold">
        {game?.name}
      </h1>

      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        Descripcion de la aplicacion o algo por el estilo
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Trailer
        </button>
        <button className="bannerButton bg-[gray]/75">
          Details
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
