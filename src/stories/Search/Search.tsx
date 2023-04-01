import React, { useState } from "react";
import "./search.css";
import { clsx } from "clsx";
import { ReactComponent as SearchIcon } from "./search-outline.svg";

interface SearchProps {
  filled?: boolean;
}

export const Search = ({ filled = false, ...props }: SearchProps) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  const defaultStyle = "btn btn-blue hover:bg-slate-300 px-2 py-2 rounded-md";
  const expandedStyle = "bg-red-400";
  return (
    <div className="flex border border-slate-300 rounded-md shadow-sm">
      <input
        type="text"
        value="Search"
        className="w-32 px-2 py-2 bg-white text-sm placeholder-slate-400 inline"
      />
      <button
        className={clsx(defaultStyle, open && expandedStyle)}
        onClick={toggleOpen}
      >
        <SearchIcon width={25} />
      </button>
    </div>
  );
};
