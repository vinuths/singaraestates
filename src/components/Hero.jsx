import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-blue-100">
      {/* Animated Buildings and Farmland */}
      <div className="absolute bottom-0 w-full flex justify-between px-10">
        {/* Buildings */}
        <div className="w-12 h-32 bg-red-400 animate-bounce-slow rounded-sm"></div>
        <div className="w-16 h-40 bg-yellow-400 animate-bounce-slower rounded-sm"></div>
        <div className="w-10 h-24 bg-green-500 animate-bounce-fast rounded-sm"></div>
        <div className="w-20 h-48 bg-purple-400 animate-bounce-slow rounded-sm"></div>
        <div className="w-12 h-36 bg-pink-400 animate-bounce-slower rounded-sm"></div>
      </div>

      {/* Farmland - simple green fields */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-green-600"></div>
      <div className="absolute bottom-20 left-10 w-8 h-8 bg-green-800 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-green-700 rounded-full animate-bounce-slower"></div>
      <div className="absolute bottom-20 left-40 w-10 h-10 bg-green-900 rounded-full animate-bounce-fast"></div>

      {/* Overlay & Content */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/70 flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
          Singara Estates and Properties
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-6 animate-fadeIn delay-200">
          Premium farmland, layouts, and residential properties with elegance
          and modern living.
        </p>
        <Link
          to="/properties"
          className="inline-block bg-amber-400 text-blue-900 py-3 px-8 rounded-full font-semibold hover:bg-amber-300 transition transform hover:scale-105 animate-fadeIn delay-400"
        >
          Explore Our Projects
        </Link>
      </div>

      {/* Animations Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 1s ease forwards; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }

          @keyframes bounce-slow { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
          @keyframes bounce-slower { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          @keyframes bounce-fast { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
          .animate-bounce-slow { animation: bounce-slow 3s infinite ease-in-out; }
          .animate-bounce-slower { animation: bounce-slower 4s infinite ease-in-out; }
          .animate-bounce-fast { animation: bounce-fast 2s infinite ease-in-out; }
        `}
      </style>
    </div>
  );
};

export default Hero;
