import LayoutItem from "../../components/layouts/LayoutItem";

const PostMenu = ({ children}) => {
  return (
    <>
      <section className=" md:px-[4vw] w-full  pt-16 max-[760px]:px-[2vw] max-[460px]:px-[2vw] max-[760px]:p-0 px-[16vw] ">
        <div className="flex flex-row  w-full h-full">
          <div className="flex-2 min-w-0 md:p-4 p-0">
            {/* //This layout contain the  main  content of the page list of posts
            // allow to toglle between like and liked posts and all listed posts */}
           
            <LayoutItem>
              <div className="overflow-y-auto h-[80vh]  pr-2">
                <main className="">{children}</main>
              </div>
            </LayoutItem>
          </div>
          <div className=" flex-1 max-w-[350px] min-w-[300px] border-l border-gray-300 p-4 max-[760px]:hidden md:hidden">
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
