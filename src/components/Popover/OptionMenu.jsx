import { useState } from "react";
// Simple Options Menu (replacing PopoverOptions)
const OptionsMenu = ({icon,onEdit,onDelete}) => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="relative z-20">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors focus:outline-none focus:bg-gray-200"
        aria-label="More options"
      >
        {icon}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white  ring-black ring-opacity-3 z-20">
            <div className="py-1">
              <button
                type="button"
                onClick={onEdit}
                className="block w-full text-left px-4 py-2 text-sm text-gray-900 dark:text-gray-400 hover:bg-gray-200  border-b border-gray-200"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={onDelete}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-red-400 hover:bg-gray-200 "
              >
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
