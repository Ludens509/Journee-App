// import {
//   Button,
//   Divider,
//   Popover,
//   PopoverArrow,
//   PopoverBody,
//   PopoverCloseButton,
//   PopoverContent,
//   PopoverHeader,
//   PopoverTrigger
// } from "@chakra-ui/react";
// import { BsThreeDots } from "react-icons/bs";
// import { CiBookmark } from "react-icons/ci";

import { useNavigate } from "react-router-dom";
import { IoIosReturnLeft } from "react-icons/io";
// import PopoverCollection from "./Popover/PopoverCollection";
import PopoverOptions from "./Popover/PopoverOptions";


const MenuPosts = () => {
  
  const navigate = useNavigate();
//   const datatest = [
//     {
//       id: 0,
//       title:'love is good',
//     },
//     {
//       id:1,
//       title:'love is hard',
//     },
//   ];

  const NavigateBack = ()=> {
    navigate('/stories');
  }

  return (
    <>
      <section className="border-y border-gray-300 m-3">
        <div className="flex flex-row justify-between">
          <button className="m-4">
            <IoIosReturnLeft size={22} onClick={NavigateBack}/>
          </button>
          <div className="flex m-4 gap-6">
            {/* <PopoverCollection contents={datatest}/> */}
            {/* <Popover>
              <PopoverTrigger>
                <Button>
                  <CiBookmark size={22} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Confirmation!</PopoverHeader>
                <PopoverBody>
                  Are you sure you want to have that milkshake?
                </PopoverBody>
                <Divider/>
                <PopoverBody>
                  Are you sure you want to have that milkshake?
                </PopoverBody>
              </PopoverContent>
            </Popover> */}

            <span className="flex items-center">
              <PopoverOptions/>
              {/* <BsThreeDots size={22} /> */}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPosts;
