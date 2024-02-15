import React, { useState, useEffect, useRef } from "react";

function TodoFilter({ handleFilter, currentFilter }) {
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
    handleFilter(optionSelected)
  }, [optionSelected])

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`w-32 h-full flex items-center justify-between px-3 bg-palewhite rounded-xl border-2 cursor-pointer ${isOpen ? "border-primary" : " border-transparent"} md:px-4 md:w-36`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-primary">{currentFilter}</p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.97997 6.26659C3.07372 6.17295 3.2008 6.12036 3.3333 6.12036C3.4658 6.12036 3.59288 6.17295 3.68663 6.26659L7.9293 10.5093C7.94478 10.5248 7.96317 10.5371 7.98342 10.5455C8.00367 10.5539 8.02538 10.5582 8.0473 10.5582C8.06922 10.5582 8.09093 10.5539 8.11118 10.5455C8.13143 10.5371 8.14982 10.5248 8.1653 10.5093L12.408 6.26659C12.5027 6.17827 12.6281 6.13019 12.7576 6.13247C12.8872 6.13476 13.0108 6.18723 13.1024 6.27884C13.194 6.37045 13.2465 6.49404 13.2487 6.62357C13.251 6.75311 13.203 6.87847 13.1146 6.97325L8.87197 11.2159C8.76363 11.3243 8.63501 11.4102 8.49346 11.4689C8.3519 11.5275 8.20019 11.5577 8.04697 11.5577C7.89375 11.5577 7.74203 11.5275 7.60047 11.4689C7.45892 11.4102 7.3303 11.3243 7.22197 11.2159L2.97997 6.97325C2.88633 6.8795 2.83374 6.75242 2.83374 6.61992C2.83374 6.48742 2.88633 6.36034 2.97997 6.26659Z"
            fill="#8D9CB8"
          />
        </svg>
      </div>
      <div
        className={`absolute w-full z-10 right-0 mt-2 bg-palewhite border-2 border-primary border-opacity-50 p-2 rounded-xl ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <ul className="flex flex-col gap-2">
          {filterOptions.map((option, index) => {
            return (
              <li key={index}>
                <button
                  className={`w-full px-3 py-2 rounded-lg text-left text-primary transition-all ease-out hover:bg-primary hover:bg-opacity-10 ${option === currentFilter && "bg-primary bg-opacity-10"}`}
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
