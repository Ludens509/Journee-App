// import LayoutItem from "../../Components/Layouts/LayoutItem";
// import { Outlet } from "react-router-dom";
import PostMenu from "./PostMenu";
import { useEffect } from "react";
import axios from "axios";
// import { range } from "../../utils";
// import CardPost from "../../Components/Card/CardPost";
// import cardsData from "../../data";
import PaginationComponent from "../../Components/Pagination/PaginationComponent";
import { useUser } from "../../context/userContext";
import { useAuth } from "../../context/authContext/index.jsx";

const PostViewList = () => {

 const { user, post, setPost } = useUser();
 const { cookies } = useAuth();
//  const [ testData, setTestData ] = useState([]);

  useEffect(() => {
    async function getData() {
      if (!user || !cookies?.token) return; // skip fetch if no user or token
      try {
        const res = await axios.get(
          `http://localhost:3000/api/posts/user/${user._id}`,
          {
              headers: { "x-auth-token": cookies.token },
          }
        );

        setPost(res.data || []);
      } catch (err) {
        console.error(err);
      }
    }

    getData();
  }, [user, setPost, cookies?.token]);

 
  // console.log("posts in PostViewList:", post);
  return (
    <>
      <section className="">
        {/* <div className="flex flex-row  w-full h-full">
          <div className="flex-1 min-w-0 p-6">
            <LayoutItem>
              <main><Outlet/></main> */}
        <PostMenu>
          <main className="gradient p-4 max-[600px]:p-2">
            {/* <CardPost data={cardsData} /> */}
            {/* <span className="flex justify-center items-center mt-4"> */}
            <PaginationComponent data={post} />
            {/* </span> */}
          </main>
        </PostMenu>
      </section>
    </>
  );
};

export default PostViewList;
