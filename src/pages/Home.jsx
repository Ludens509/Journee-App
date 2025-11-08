import { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";

import { ArrowRight, BookOpen, Lock, Sparkles } from "lucide-react";
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

              {/* Description */}
              <p className="text-lg md:text-xl text-[#6b5b7a] leading-relaxed max-w-xl">
                Tired of cluttered apps and forgotten notebooks? Journee gives
                you a clean, distraction-free space to capture your
                thoughts—inspired by Medium's elegant design, but made just for
                you.
              </p>
              {/* CTA Buttons */}

              <div className="flex flex-row sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/auth")}
                  className="group flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#d6bae4] to-[#c8a3d9] text-white rounded-full font-semibold hover:from-[#c8a3d9] hover:to-[#a77cc1] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button
                  onClick={() => navigate("/about")}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#6b5b7a] border-2 border-[#d6bae4] rounded-full font-semibold hover:bg-[#f9f7fb] transition-all"
                >
                  Learn More
                </button>
              </div>
               <div className="flex items-center gap-8 pt-2">
                  <div className="flex items-center gap-2 text-sm text-[#6b5b7a]">
                    <Lock size={16} className="text-[#d6bae4]" />
                    100% Private
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6b5b7a]">
                    <BookOpen size={16} className="text-[#d6bae4]" />
                    Unlimited Entries
                  </div>
                </div>
            </div>
            {/* ---Right--- */}
            <div className="relative flex-1   xm:w-full xm:mt-4 xm:mb-4 xm:ml-2">
              {/* <img src={Img} alt='image_thumbnail' className='w-8/12 xm:hidden' />
               */}

              {/* Spline library that display 3D image animation */}
              <div className=" spline absolute top-[-3%]  right-[0%]  sm:hidden  sm:flex-row sm:relative">
                <Spline
                  ref={splineRef}
                  scene="https://prod.spline.design/IzDBUKdMuk8WH22V/scene.splinecode"
                  width="500px"
                />
              </div>
              {/*  */}
            </div>
          </div>
          
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative  bg-gradient-to-br from-[#f9f7fb] via-white to-[#f2e8f7]"> {/* min-h-screen*/}
        

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#d6bae4] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#d6bae4] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Feature Banner Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#d6bae4] via-[#e4d1ef] to-[#d6bae4] overflow-hidden">
        {/* Decorative Background Circles */}
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-white opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white opacity-5 translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-[#6b5b7a]  text-sm font-medium">
              <Sparkles size={16} />
              Transform Your Daily Routine
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              The Modern Diary for Mindful Living
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed">
              Capture your daily moments, track your personal growth, and build
              a meaningful habit of reflection. With Journee's distraction-free
              interface inspired by Medium, journaling becomes an experience
              you'll look forward to.
            </p>

            {/* Stats or Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">∞</div>
                <div className="text-white text-opacity-90">
                  Unlimited Entries
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">100%</div>
                <div className="text-white text-opacity-90">
                  Private & Secure
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">✨</div>
                <div className="text-white text-opacity-90">
                  Beautiful Design
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d6bae4] bg-opacity-20 rounded-full text-[#6b5b7a] text-sm font-medium">
                  <Sparkles size={16} />
                  Your Personal Space for Reflection
                </div>

              </div>
          <div className="text-center mb-16">
            <h2 className="ourwork-h1 text-3xl md:text-4xl font-bold text-[#4a4458] mb-6">
              Your Life, Your Words, Your Legacy
            </h2>
            <p className="text-lg text-[#6b5b7a] max-w-2xl mx-auto">
              Everything you need to build a meaningful journaling practice
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-3 gap-8 sm:grid-cols-1">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#f9f7fb] to-white border-2 border-transparent hover:border-[#d6bae4] transition-all hover:shadow-xl">
              <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="text-[#d6bae4]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#4a4458] mb-2">
                Rich Text Editor
              </h3>
              <p className="text-[#6b5b7a]">
                Write with a beautiful, distraction-free editor powered by the
                same technology that powers Medium.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#f9f7fb] to-white border-2 border-transparent hover:border-[#d6bae4] transition-all hover:shadow-xl">
              <div className="w-12 h-12 rounded-full bg-[#d6bae4] bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#4a4458] mb-2">
                Private & Secure
              </h3>
              <p className="text-[#6b5b7a]">
                Your thoughts are yours alone. All entries are encrypted and
                stored securely with enterprise-grade protection.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#f9f7fb] to-white border-2 border-transparent hover:border-[#d6bae4] transition-all hover:shadow-xl">
              <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="text-[#d6bae4]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#4a4458] mb-2">
                Track Your Growth
              </h3>
              <p className="text-[#6b5b7a]">
                Watch your journey unfold over time. Reflect on past entries and
                discover patterns in your personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#f9f7fb] via-white to-[#f2e8f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a4458] mb-6">
            Start Your Journaling Journey Today
          </h2>
          <p className="text-lg text-[#6b5b7a] mb-8 max-w-2xl mx-auto">
            Join thousands of people who have transformed their lives through
            the power of daily reflection.
          </p>
          <button
            onClick={() => navigate("/auth")}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#d6bae4] to-[#c8a3d9] text-white rounded-full font-semibold hover:from-[#c8a3d9] hover:to-[#a77cc1] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Create Your Free Account
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
