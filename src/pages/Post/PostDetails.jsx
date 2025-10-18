import {Avatar} from 'flowbite-react';
import Designer from "../../assets/images/Designer.png";
import AvatarProfile from "../../assets/images/profile-Avatar.jpeg";
import MenuPosts from '../../components/MenuPosts';

const PostDetail = () => {
  return (
    <>
      <section className="flex flex-col px-[20vw] pt-8 poppins-regular w-full  xm:px-[5vw] justify-center leading-9">
        <div className="ourwork-h1 pt-8 xm:w-full">
          <h1 className="font-bold font-sans text-2xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
        </div>

        <p className="italic text-xm font-medium summary py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <div className='py-3'><MenuPosts/></div>
        <div className="bg-purple-500 w-full p-2 h-fit rounded-md">
          <img src={Designer} alt="post-image" />
        </div>
      </section>
      <section className="poppins-regular flex py-4 pl-[20vw] justify-center leading-7 xm:p-[5vw] xm:flex-col-reverse">
        <p className=" w-2/3 poppins-regular xm:w-full text-justify py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quis repellat. Odio porro hic vel nemo aperiam. Temporibus magni
          consectetur, laboriosam minima nesciunt soluta, quaerat, asperiores
          officia fuga modi ab!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quis repellat. Odio porro hic vel nemo aperiam. Temporibus magni
          consectetur, laboriosam minima nesciunt soluta, quaerat, asperiores
          officia fuga modi ab!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quis repellat. Odio porro hic vel nemo aperiam. Temporibus magni
          consectetur, laboriosam minima nesciunt soluta, quaerat, asperiores
          officia fuga modi ab!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quis repellat. Odio porro hic vel nemo aperiam. Temporibus magni
          consectetur, laboriosam minima nesciunt soluta, quaerat, asperiores
          officia fuga modi ab!

        </p>
        <div className=" flex-1 md:w-1/4 px-14 justify-around xm:flex xm:border-b xm:border-gray-200 xm:px-0">
          <div className="flex flex-col border-b border-gray-200 pb-2 xm:justify-center xm:border-none">
            Posted
            <span className="text-xm text-gray-500 dark:text-gray-400">May 05,2024</span>
          </div>
          <div className="border-b border-gray-200 py-4 xm:border-none">
            <Avatar img={AvatarProfile} rounded>
              <div className="space-y-1 font-medium dark:text-white">
                <div>Jess Leos</div>
                <div className="text-xm text-gray-500 dark:text-gray-400">
                  Joined in August 2014
                </div>
              </div>
            </Avatar>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetail;
