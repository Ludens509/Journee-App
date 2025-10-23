import LayoutItem from "../../components/layouts/LayoutItem";
// import { Outlet } from "react-router-dom";
// import PropTypes from "prop-types";

const PostMenu = ({ children}) => {
  return (
    <>
      <section className=" px-[8vw] w-full  pt-16 max-[760px]:px-[2vw] max-[460px]:px-[2vw] max-[760px]:p-0">
        <div className="flex flex-row  w-full h-full">
          <div className="flex-3 min-w-0 p-4  ">
            {/* //This layout contain the  main  content of the page list of posts
            // allow to toglle between like and liked posts and all listed posts */}
           
            <LayoutItem>
              <div className="overflow-y-auto w-[100vh] h-[80vh] p-4 scrollbar-thin scrollbar-thumb-[#963ab4] scrollbar-track-[#f0f1ff]">
                <main className="">{children}</main>
              </div>
            </LayoutItem>
          </div>
          <div className=" flex-1 max-w-[350px] border-l border-gray-300 p-4 max-[760px]:hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            consectetur qui ab a.
            {}
          </div>
        </div>
      </section>
    </>
  );
};

// PostMenu.propTypes = {
//   children: PropTypes.any.isRequired,
// };
export default PostMenu;
