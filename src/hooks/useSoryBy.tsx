import React, { useCallback, useState } from "react";

export const soryByOptions = [
  { id: "original_title.asc", name: "Original Title (A-Z)" },
  { id: "original_title.desc", name: "Original Title (Z-A)" },
  { id: "vote_average.desc", name: "Rating (Highest)" },
  { id: "release_date.desc", name: "Release Date (Newest)" },
  { id: "release_date.asc", name: "Release Date (Oldest)" },
  { id: "popularity.desc", name: "Popularity (Highest)" },
];

const safeLocalStorage = {
  getItem: (key: string) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem: (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.error("Could not set local storage item " + e);
    }
  },
};

const defaultValue = safeLocalStorage.getItem("sortBy") || "popularity.desc";
interface SoryByContext {
  sortBy: string;
  changeSortBy: (sortBy: string) => void;
}

const SoryByContext = React.createContext({
  sortBy: "popularity.desc",
} as SoryByContext);

export const useSoryBy = () => React.useContext(SoryByContext).sortBy;
export const useChangeSoryBy = () =>
  React.useContext(SoryByContext).changeSortBy;

export const SoryByProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [sortBy, changeSortByState] = useState(defaultValue);
  const changeSortBy = useCallback(
    (sortBy: string) => {
      changeSortByState(sortBy);
      safeLocalStorage.setItem("sortBy", sortBy);
    },
    [changeSortByState]
  );

  return (
    <SoryByContext.Provider value={{ sortBy, changeSortBy }}>
      {props.children}
    </SoryByContext.Provider>
  );
};
