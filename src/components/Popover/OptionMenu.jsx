import { useState } from "react";
// Simple Options Menu (replacing PopoverOptions)
const OptionsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors focus:outline-none focus:bg-gray-200"
        aria-label="More options"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gray-800 dark:text-gray-400"
        >
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="19" r="2" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white  ring-black ring-opacity-3 z-20">
            <div className="py-1">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-900 dark:text-gray-400 hover:bg-gray-200 ">
                Edit
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-red-400 hover:bg-gray-200 ">
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OptionsMenu;