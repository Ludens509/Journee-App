

import { IoIosReturnLeft } from "react-icons/io";
import { useNavigate } from "react-router-dom";
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
    navigate('/posts');
  }

  return (
    <>
      <section className="border-y border-gray-300 m-3">
        <div className="flex flex-row justify-between">
          <button className="m-4">
            <IoIosReturnLeft size={22} onClick={NavigateBack}/>
          </button>
          <div className="flex m-4 gap-6">
            

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
