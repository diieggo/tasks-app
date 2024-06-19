import React, { useState, useEffect, useRef, useContext } from "react";
import { IconChevronDown } from "../assets/icons";
import { TodoContext } from "../context/TodoContext";

function TodoFilter() {
  const {handleFilter, selectedFilter} = useContext(TodoContext)

  const [isOpen, setIsOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState("All");
  const dropdownRef = useRef(null);

  const filterOptions = ["All", "Pending", "Completed"];

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    handleFilter(optionSelected);
  }, [optionSelected, handleFilter]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`flex h-full w-32 cursor-pointer items-center justify-between rounded-xl border-2 bg-palewhite px-3 transition-colors ${isOpen ? "border-primary" : " border-transparent"} dark:bg-gray-800 md:w-36 md:px-4`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-primary">{selectedFilter}</p>
        <IconChevronDown />
      </div>
      <div
        className={`absolute right-0 z-10 mt-2 w-full rounded-xl border-2 border-primary border-opacity-50 bg-palewhite p-2 transition-colors ${isOpen ? "visible opacity-100" : "invisible opacity-0"} dark:border-gray dark:bg-gray-800`}
      >
        <ul className="flex flex-col gap-2">
          {filterOptions.map((option, index) => {
            return (
              <li key={index}>
                <button
                  className={`w-full rounded-lg px-3 py-2 text-left text-primary transition-all ease-out hover:bg-primary hover:bg-opacity-10 ${option === selectedFilter && "bg-primary bg-opacity-10"}`}
                  onClick={() => {
                    setOptionSelected(option);
                  }}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export { TodoFilter };
