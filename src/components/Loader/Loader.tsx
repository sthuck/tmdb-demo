import React, { ReactElement } from "react";
import { Spinner } from "../Spinner/Spinner";

export const Loader: React.FC<{
  isLoading: boolean;
  children: ReactElement;
}> = (props) => {
  const { isLoading, children } = props;

  if (isLoading) {
    return (
      <div className="flex flex-row h-full w-full justify-center items-center space-x-2 mt-8">
        <Spinner size="medium" />
        <Spinner size="medium" />
        <Spinner size="medium" />
      </div>
    );
  }
  if (children) {
    return children;
  }
  throw new Error("Loader must have children");
};
