import { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";
// import HeroImage from '../assets/images/heroImage.jpg';
function Home() {
  const navigate = useNavigate();
  const splineRef = useRef(null);

  return (
    <>
      <section className="">
        <div className="block--container">
          <div className="flex px-10 py-12 my-16 mx-auto space-y-0 sm:flex-col ">
            {/* ---Left--- */}
            <div className=" flex-1 ml-8 space-y-10 w-2/2 sm:w-full sm:ml-2">
              <div className="background-container">
                <h1 className="text--box font-medium text-2xl mt-12">
                  Write Your Ways Through Life`s Adventures.
                </h1>
              </div>
              <p className="poppins-regular mr-16">
                Tired of cluttered apps and forgotten notebooks? Journee gives
                you a clean, distraction-free space to capture your
                thoughts—inspired by Medium's elegant design, but made just for
                you. Start building your journaling habit today!
              </p>
              <button
                onClick={() => {
                  navigate("/auth");
                }}
                className=" btn--started flex items-center justify-center btn--start p-3 px-6  text-white hover:z-0 rounded-full relative "
              >
                Get started
              </button>
            </div>
            {/* ---Right--- */}
            <div className="relative flex-1   xm:w-full xm:mt-4 xm:mb-4 xm:ml-2">
              {/* <img src={Img} alt='image_thumbnail' className='w-8/12 xm:hidden' />
               */}

              {/* Spline library that display 3D image animation */}
              <div className="absolute top-[1%]  right-[1%]  sm:hidden sm:flex-row">
                <Spline
                  ref={splineRef}
                  scene="https://prod.spline.design/IzDBUKdMuk8WH22V/scene.splinecode"
                  width="500px"
                />
              </div>
              {/*  */}
            </div>
          </div>
          <div className="global gradient">
            <div className="ourwork">
              <h1 className="ourwork-h1 poppins-regular">
                Your Life, Your Words, Your Legacy,
              </h1>
            </div>

            <section className="pb-[--fluid-lg] md:px-[--fluid-base] px-[--fluid-xm] mt-10">
              {/* <div className="bg-[--bg-violet] p-[--fluid-xm] overflow-hidden mx-auto  translate-x-0 md:rounded-lg hover:scale-110 transition-transform duration-[1500ms] ease-in-out "> */}
              <div className=" ">
                <div className="flex flex-col items-center justify-center mb-[0.5rem]">
                  <header className="mx-auto mb-2xl flex flex-col text-center items-center  justify-center mb-[--fluid-xm]">
                    <div className="flex items-center gap-1 ">
                      <h2 className="mb-[1.5rem] color-[#2b1c50]">
                        The Modern Diary for Mindful Living
                      </h2>
                    </div>
                    <p className="mt-[1rem] color-[#3d2e7c">
                      {" "}
                      Capture your daily moments, track your personal growth,
                      and build a meaningful habit of reflection. With Journee's
                      distraction-free interface inspired by Medium, journaling
                      becomes an experience you'll look forward to.
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

            <section className="banner flex text-center bg-ring-purple w-full h-[285px]">
            <div className=" self-center absolute left-[30%] xm:left-[23%] xm:text-base xm: m-4 xm:sticky">
              <h1 className="montserrat-semibold">
                MyJournee where stories unfold.
              </h1>
              <p className="text-xm ">
                {" "}
                The idea behind <b>MyJournee </b> is to have a diary wher you
                can unfold all your stories.
              </p>
            </div> 
            {/* <img src={HeroImage} alt="banner"  className='banner-img opacity-20' /> */}
             </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
