import { Popover } from "flowbite-react";
import { BsThreeDots } from "react-icons/bs";

const PopoverOptions = () => {
  const content = (
    <div aria-labelledby="profile-popover">
      <div className="w-64 ">
        <div className=" p-2 items-center justify-between">
          <div className="border-b border-gray-300 w-full pb-2">
            <button className="text-gray-500 hover:text-black">
              Edit post
            </button>
          </div>
          <div className="w-full pb-2">
            <button className="text-red-500 hover:text-black">
              Delete post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <Popover content={content} placement="top">
        <button>
          <BsThreeDots size={22} />
        </button>
      </Popover>
    </>
  );
};

export default PopoverOptions;
