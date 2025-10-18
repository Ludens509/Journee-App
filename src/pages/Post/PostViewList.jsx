// import LayoutItem from "../../Components/Layouts/LayoutItem";
// import { Outlet } from "react-router-dom";
import PostMenu from "./PostMenu";
// import { range } from "../../utils";
// import CardPost from "../../Components/Card/CardPost";
import cardsData from "../../data";
import PaginationComponent from "../../Components/Pagination/PaginationComponent";

const PostViewList = () => {
  return (
    <>
      <section className="">
        {/* <div className="flex flex-row  w-full h-full">
          <div className="flex-1 min-w-0 p-6">
            <LayoutItem>
              <main><Outlet/></main> */}
        <PostMenu>
          <main className="gradient p-4 mobile:p-2">
            {/* <CardPost data={cardsData} /> */}
            {/* <span className="flex justify-center items-center mt-4"> */}
            <PaginationComponent data={cardsData} />
            {/* </span> */}
          </main>
        </PostMenu>
      </section>
    </>
  );
};

export default PostViewList;
