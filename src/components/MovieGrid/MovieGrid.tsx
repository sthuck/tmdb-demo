import React from "react";
import { MovieGridProps } from "./types";
import { MovieCard } from "./MovieCard";

export const MovieGrid: React.FC<MovieGridProps> = (props) => {
  const { data } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6 p-4 bg-gray-100">
      {data.map((movie) => {
        return <MovieCard movie={movie} key={movie.id} className="" />;
      })}
    </div>
  );
};
