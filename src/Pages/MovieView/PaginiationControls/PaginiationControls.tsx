import React from "react";
import { LeftIcon, RightIcon } from "./ArrowIcons";

export interface PageinationControlsProps {
  currentPage: number;
  totalPages: number;
  onClickNext: () => void;
  onClickPrevious: () => void;
}

export const PaginiationControls: React.FC<PageinationControlsProps> = (
  props
) => {
  const { onClickNext, onClickPrevious, currentPage, totalPages } = props;
  const hasPrev = props.currentPage > 1;
  const hasNext = props.currentPage < props.totalPages;

  return (
    <div className="flex flex-row content-between items-center space-x-3">
      {hasPrev ? (
        <LeftIcon
          onClick={onClickPrevious}
          className="w-16 h-16 cursor-pointer  hover:stroke-purple-700"
        />
      ) : (
        <div className="w-16 h-16" />
      )}
      <div className="text-2xl">
        Page {currentPage}/{totalPages}
      </div>
      {hasNext ? (
        <RightIcon
          onClick={onClickNext}
          className="w-16 h-16 cursor-pointer hover:stroke-purple-700"
        />
      ) : (
        <div />
      )}
    </div>
  );
};
