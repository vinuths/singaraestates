import React from "react";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="relative h-[80vh] w-full">
      <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/70 flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn text-center">Welcome to Singara Estates and properties</h1>
        <p className="text-xl md:text-2xl max-w-2xl text-center animate-fadeIn delay-200">
          Premium properties with modern living and elegance.
        </p>
        <a href="/properties" className="mt-6 inline-block bg-accent hover:bg-secondary transition text-white py-3 px-8 rounded-lg font-semibold animate-fadeIn delay-400">
          Explore Properties
        </a>
      </div>
    </div>
  );
};

export default Hero;
