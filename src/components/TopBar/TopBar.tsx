import React from "react";
import { TextStyle, Text } from "../Text/Text";
import clsx from "clsx";
import { Select } from "../Select";
import {
  soryByOptions,
  useChangeSoryBy,
  useSoryBy,
} from "../../hooks/useSoryBy";

export const TopBar = () => {
  const sortBy = useSoryBy();
  const changeSortBy = useChangeSoryBy();

  return (
    <nav className="bg-gray-800 p-2 pl-4 shadow-lg flex flex-row justify-between">
      <h1 className={clsx(Text(TextStyle.title1), "text-zinc-100")}>
        TMBD Demo
      </h1>
      <div className="mr-4 flex flex-row items-center">
        <label className="mr-2 text-zinc-100">Sory by:</label>
        <Select
          options={soryByOptions}
          onChange={changeSortBy}
          value={sortBy}
          itemToValue={(item: { name: string; id: string }) => item.id}
        ></Select>
      </div>
    </nav>
  );
};
