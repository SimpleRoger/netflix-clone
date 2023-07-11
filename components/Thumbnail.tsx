import { Movie } from "@/typings";
import Image from "next/image";
import React from "react";

interface Props {
  // firebase
  //   movie: Movie | DocumentData;
  movie: Movie;
}
export default function Thumbnail({ movie }: Props) {
    
  return (
    <div className="relative h-28 min-w-[180px] curosr-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
      alt = "main movie image"
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
}
