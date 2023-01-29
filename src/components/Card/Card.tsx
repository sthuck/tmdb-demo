import clsx from "clsx";
import React from "react";
import { Text, TextStyle } from "../Text/Text";
import "./card.css";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = (props) => {
  const { title, metadataRow, description, image, onClick, className } = props;
  return (
    <div
      className={clsx(
        "flex flex-col bg-white rounded shadow-lg overflow-hidden relative cursor-pointer slide-popup",
        className
      )}
      onClick={onClick}
    >
      <header
        className={clsx(
          "m-2 md:h-20 overflow-clip flex md:justify-center",
          Text(TextStyle.title2)
        )}
      >
        {title}
      </header>

      <div className="flex flex-row md:flex-col h-48 md:h-auto space-x-4 md:space-x-0 relative">
        <img
          className="min-h-0 h-48 md:h-auto object-contain"
          src={image}
          alt={`${title} image`}
          // loading={"lazy"}
        ></img>
        <div className="flex flex-col md:absolute md:bottom-0 md:bg-gray-300 md:opacity-80 md:pt-3 pop-up">
          <div
            className={clsx(
              "mb-1 p-1 flex-grow md:flex-grow-0 md:line-clamp-6",
              Text(TextStyle.secondary),
              "md:text-black",
              "overflow-auto"
            )}
          >
            {description}
          </div>
          <footer
            className={clsx("p-1", Text(TextStyle.minor), "md:text-black")}
          >
            {metadataRow}
          </footer>
        </div>
      </div>
    </div>
  );
};
