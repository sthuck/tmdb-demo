import React from "react";
export const Spinner = (props: { size?: "small" | "medium" | "large" }) => {
  const { size } = props;
  const spinnerSize =
    size === "small"
      ? "w-4 h-4"
      : size === "medium"
      ? "w-12 h-12"
      : size === "large"
      ? "w-24 h-24"
      : "w-8 h-8";
  return (
    <div
      className={`
  spinner-grow inline-block bg-current ${spinnerSize} rounded-full opacity-0 text-purple-500
  `}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
