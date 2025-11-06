import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Properties from "../components/Properties";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Properties />
    </div>
  );
};

export default Home;
