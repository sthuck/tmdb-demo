import React from "react";
import { Movie } from "../../../api/types";
import { Card } from "../../Card";
import popcornIcon from "./popcorn.svg";
import FALLBACK_IMAGE from "../assets/No-image-found.jpg";

const posterPathBase = "https://image.tmdb.org/t/p/w400/";
export const MovieCard = (props: { movie: Movie; className?: string }) => {
  const { id, poster_path, release_date, title, vote_average, overview } =
    props.movie;

  const image = poster_path ? posterPathBase + poster_path : FALLBACK_IMAGE;

  return (
    <Card
      description={overview}
      image={image}
      title={title}
      className={props.className}
      metadataRow={
        <span className="flex flex-row items-center	">
          Released at: {release_date} | {vote_average}{" "}
          <img className="h-3 ml-2" src={popcornIcon} />
        </span>
      }
      onClick={() =>
        window.open(`https://www.themoviedb.org/movie/${id}`, "_blank")
      }
    ></Card>
  );
};
