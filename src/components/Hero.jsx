import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-heroZoom"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')", // placeholder
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/70 to-blue-800/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fadeIn">
          Singara Estates & Properties
        </h1>

        <p className="text-lg md:text-2xl max-w-3xl mb-8 text-blue-100 animate-fadeIn delay-200">
          Premium farmland development, approved layouts, and residential
          properties crafted for long-term value and trust.
        </p>

        <Link
          to="/properties"
          className="bg-amber-400 text-blue-900 px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-300 transition transform hover:scale-105 animate-fadeIn delay-400"
        >
          Explore Our Projects
        </Link>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }

          @keyframes heroZoom {
            from { transform: scale(1); }
            to { transform: scale(1.08); }
          }
          .animate-heroZoom {
            animation: heroZoom 18s ease-in-out infinite alternate;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
