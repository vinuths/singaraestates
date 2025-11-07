import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Properties from "../components/Properties";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
        <Hero />
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <About />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-r from-amber-400 to-yellow-500 py-16 px-8 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <Services />
        </div>
      </section>

      {/* Properties Section */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <Properties />
        </div>
      </section>

 {/* testimonial Section */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <Testimonials />
        </div>
      </section>

      {/* Footer (Optional) */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} RealEstateCo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
