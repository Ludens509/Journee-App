import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Book, Pen } from 'lucide-react';

import {Link} from "react-router-dom";

function NotFoundPage() {

    const navigate = useNavigate();

    return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9f7fb] via-white to-[#f2e8f7] px-4 py-16">
      <div className="max-w-4xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="relative">
            {/* Animated Book/Journal Illustration */}
            <div className="relative mx-auto w-64 h-80 md:w-80 md:h-96">
              {/* Book Base */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d6bae4] to-[#c8a3d9] rounded-lg shadow-2xl transform rotate-3 transition-transform hover:rotate-0 duration-300">
                <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#a77cc1] to-transparent rounded-t-lg"></div>
              </div>
              
              {/* Book Pages */}
              <div className="absolute inset-4 bg-white rounded shadow-inner flex flex-col items-center justify-center p-8">
                <div className="text-9xl font-bold text-[#d6bae4] mb-4">404</div>
                <div className="w-full space-y-2">
                  <div className="h-2 bg-gray-200 rounded w-3/4 mx-auto"></div>
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6 mx-auto"></div>
                </div>
              </div>

              {/* Floating Pen */}
              <div className="absolute -right-4 top-1/3 transform rotate-45 animate-bounce">
                <Pen className="text-[#d6bae4]" size={48} />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -left-8 top-1/4 w-16 h-16 rounded-full bg-[#f5d7e8] opacity-50 animate-pulse"></div>
              <div className="absolute -right-8 bottom-1/4 w-12 h-12 rounded-full bg-[#d4e8f5] opacity-50 animate-pulse delay-75"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d6bae4] bg-opacity-20 rounded-full text-[#6b5b7a] text-sm font-medium">
              <Book size={16} />
              Page Not Found
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#4a4458]">
              Oops! This page is blank
            </h1>
            
            <p className="text-lg text-[#6b5b7a] leading-relaxed">
              It seems this chapter hasn't been written yet. Let's get you back to your journey.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-row sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button
                onClick={() => navigate('/')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#d6bae4] text-white rounded-lg font-medium hover:bg-[#c8a3d9] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Home size={20} />
                Return Home
              </button>
              
              <button
                onClick={() => navigate(-1)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#6b5b7a] border-2 border-[#d6bae4] rounded-lg font-medium hover:bg-[#f9f7fb] transition-all"
              >
                <ArrowLeft size={20} />
                Go Back
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );

}

export default NotFoundPage;
