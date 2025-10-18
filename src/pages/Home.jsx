// import { Link } from 'react-router-dom'
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { auth } from '../utils/firebase';
// import Img from '../assets/images/download(pie22).jpeg';
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";
// import HeroImage from '../assets/images/heroImage.jpg';
function Home() {
  // // sign in with google
  // const googleProvider = new GoogleAuthProvider();
  // const GoogleLogin = async() => {
  //   try {
  //     const result = await signInWithPopup(auth, googleProvider)
  //     console.log(result.user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
const navigate=useNavigate();

  return (
    <>
      <section className="">
        <div className="block--container">
          <h1 className="text-center">Home</h1>
          <div className="flex px-20 py-4 my-16 mx-auto space-y-0 xm:flex-col ">
            {/* ---Left--- */}
            <div className=" flex-1 ml-8 space-y-10 w-1/2 xm:w-full xm:ml-2">
              <div className="background-container">
                <h1 className="text--box font-medium text-2xl mt-12">
                  Write Your Ways Through Life`s Adventures.
                </h1>
              </div>
              <p className="poppins-regular mr-20">
                Manage make it simple for software teams to plan day-to-daytask
                while keeping the larger team goals in view.
              </p>
              <button
                onClick={()=>{
                    navigate("/")
                }}
                className=" flex items-center justify-center btn--start p-3 px-6 text-white bg-[#A1683B] hover:z-0 rounded-full relative "
              >
                Get started
              </button>
            </div>
            {/* ---Right--- */}
            <div className="flex-1  w-1/2 bg-white xm:w-full xm:mt-4 xm:mb-4 xm:ml-2">
              {/* <img src={Img} alt='image_thumbnail' className='w-8/12 xm:hidden' />
               */}
             <div className=" xm:hidden xm:flex-row">
                <Spline
                  scene="https://prod.spline.design/IzDBUKdMuk8WH22V/scene.splinecode"
                  width="500px"
                />
</div>
            </div>
          </div>
          <div className="global gradient">
            <div className="ourwork">
              <h1 className="ourwork-h1 poppins-regular">
                We create beautiful and fast web services
              </h1>
            </div>

            <section className="pb-[--fluid-lg] md:px-[--fluid-base]">
              {/* <div className="bg-[--bg-violet] p-[--fluid-xm] overflow-hidden mx-auto  translate-x-0 md:rounded-lg hover:scale-110 transition-transform duration-[1500ms] ease-in-out "> */}
              <div className=" p-[--fluid-xm] bg-[#a1673b1e] overflow-hidden mx-auto  translate-x-0 md:rounded-lg hover:scale-110 transition-transform duration-[1500ms] ease-in-out  backdrop-blur-[4px] border-solid-[rgba(255,255,255,0.4)] border-[1px]  shadow-[rgba(255,255,255,0.90)]">
                <div className="flex flex-col items-center justify-center mb-[0.5rem]">
                  <header className="mx-auto mb-2xl flex flex-col text-center items-center  justify-center mb-[--fluid-xm]">
                    <div className="flex items-center gap-1 ">
                      <h2 className="mb-[1.5rem] color-[#2b1c50]">
                        keep your content safe
                      </h2>
                    </div>
                    <p className="mt-[1rem] color-[#3d2e7c">
                      {" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Illo non iure quisquam repudiandae maiores error
                      doloremque, minima at velit ex vel quibusdam quam rerum
                      enim, nostrum dolorem dolores modi suscipit?
                    </p>
                  </header>
                </div>
              </div>
            </section>
            <div className="">
              <h1 className="text-center text-2xl font-semibold">
                Why Choose Us?
              </h1>
              {/* <Spline scene="https://prod.spline.design/q8IELBO6Rjwr3Qyu/scene.splinecode" /> */}
            </div>

            {/* <section className="banner flex text-center bg-purple-800 w-full h-[285px]">
            <div className=" self-center absolute left-[30%] xm:left-[23%] xm:text-base xm: m-4 xm:sticky">
              <h1 className="montserrat-semibold">
                MyJournee where stories unfold.
              </h1>
              <p className="text-xm ">
                {" "}
                The idea behind <b>MyJournee </b> is to have a diary wher you
                can unfold all your stories.
              </p>
            </div> */}
            {/* <img src={HeroImage} alt="banner"  className='banner-img opacity-20' /> */}
            {/* </section> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
