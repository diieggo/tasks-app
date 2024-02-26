import { useState, useEffect, useRef } from "react";
import { IconMenuKebab } from "../assets/icons";

function TodoDropdown({ onDelete, openModalAction }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = () => {
    setIsOpen(false);
  };

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

  return (
    <div className="relative h-5" ref={dropdownRef}>
      <button
        className="inline-flex text-slateblue"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IconMenuKebab />
      </button>
      <div
        className={`absolute right-0 z-10 mt-2 rounded-xl border border-palewhite bg-white p-2 ${isOpen ? "visible opacity-100" : "invisible opacity-0"} transition-colors dark:border-gray-900 dark:bg-gray-800`}
      >
        <ul>
          <li>
            <button
              className="w-full rounded-lg px-3 py-2 text-left text-primary transition-all ease-in-out hover:bg-primary hover:bg-opacity-10"
              onClick={() => {
                handleOptionClick();
                openModalAction();
              }}
            >
              Edit
            </button>
          </li>
          <li>
            <button
              className="w-full rounded-lg px-3 py-2 text-left text-red-500 transition-all ease-in-out hover:bg-red-500 hover:bg-opacity-10"
              onClick={() => {
                handleOptionClick();
                onDelete();
              }}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { TodoDropdown };
