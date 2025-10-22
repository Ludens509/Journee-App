import { IoIosReturnLeft } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import OptionsMenu from "../components/Popover/OptionMenu";
import apiService from "../apiService/apiService.mjs";
import { useAuth } from "../context/authContext/index.jsx";

const MenuPosts = ({data}) => {
  const navigate = useNavigate();
  const { cookies } = useAuth();

  const handleDelete = () => {
    (async () => {
      if (!data) return;
      try {
        await apiService.deletePost(data._id || data.id, cookies?.token);
        navigate('/posts');
      } catch (err) {
        console.error('Delete failed', err);
      }
    })();
  };

  const handleEdit = () => {
    console.log("Edit post");
    navigate(`/posts/${data.id || data._id}/edit`, { state:  data  });
  };

  const NavigateBack = () => {
    navigate("/posts");
  };

  return (
    <>
      <section className="border-y border-gray-300 m-3">
        <div className="flex flex-row justify-between">
          <button
            className="m-4 cursor-pointer hover:text-purple-600 transition-colors duration-200 ease-in-out"
            aria-label="Navigate back to posts list"
          >
            <IoIosReturnLeft size={22} onClick={NavigateBack} />
          </button>
          <div className="flex m-4 gap-6">
            <span className="flex items-center">
              <OptionsMenu
                icon={<BsThreeDots size={22} />}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
              {/* <BsThreeDots size={22} /> */}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPosts;
