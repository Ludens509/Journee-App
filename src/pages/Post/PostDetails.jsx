import { Avatar } from "flowbite-react";
import Designer from "../../assets/images/Designer.png";
import AvatarProfile from "../../assets/images/profile-Avatar.jpeg";
import MenuPosts from "../../components/MenuPosts";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {  useState, useEffect } from "react";
// import axios from "axios";
import apiService from "../../apiService/apiService.mjs";
// import { useAuth } from "../../context/authContext/index.jsx";

const PostDetail = () => {
  // const { cookies } = useAuth();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  console.log("Post ID:", id);
  console.log("Location:", location);
  const [post, setPost] = useState(location.state ?? null);
  const [loading, setLoading] = useState(!location.state);
  const [error, setError] = useState(null);

  console.log(post);
 
 useEffect(()=>{
  if(!post && id){
    setLoading(true);
    apiService.getPostById(id)
    .then((data)=> setPost(data))
    .catch((err)=>{
       console.error(err);
      })
      .finally(()=> setLoading(false))
  }
 },[id, post]);


  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-pulse text-lg">Loading post...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center py-20 px-4">
        <div className="text-red-500 text-xl mb-4">⚠️ {error}</div>
        <button 
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Not found state
  if (!post) {
    return (
      <div className="flex flex-col justify-center items-center py-20">
        <div className="text-xl mb-4">Post not found</div>
        <button 
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <>
      <section className="flex flex-col px-[15vw] pt-8 poppins-regular w-full sm:px-4 sm:justify-center leading-9">
        <div className="ourwork-h1 pt-8 xm:w-full">
          <h1 className="font-bold font-sans text-2xl">{post.title}</h1>
        </div>

        <div className="flex mx-2 py-2 mb-4 items-center">
          <span className="text-sm text-gray-600">Posted:</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
            {post.createdAt.slice(0, 10)}
          </span>
          
          {/* Author info if available */}
          {post.author && (
            <span className="text-sm text-gray-600 ml-4">
              by <span className="font-medium">{post.author.name}</span>
            </span>
          )}
        </div>

        <div className="py-3">
          <MenuPosts />
        </div>
      </section>

      <section className="flex py-4 px-[15vw] justify-center items-center leading-7 sm:px-4">
        <div className="w-full">
          {/* Featured image if available */}
          {post.image && (
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-auto rounded-lg mb-6"
            />
          )}
          
          {/* Content */}
          <div 
            className="prose prose-lg max-w-none text-justify py-3"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* OR if content is plain text: */}
          {/* <p className="w-full text-justify py-3 whitespace-pre-wrap">
            {post.content}
          </p> */}
        </div>
      </section>
    </>
  );
};

export default PostDetail;
