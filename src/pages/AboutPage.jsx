import React from "react";
import AboutSection from "../components/AboutSection";

const AboutPage = () => {
  return (
    <div className="pt-28 bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 text-center">
        <h1 className="text-5xl font-extrabold">
          About Singara Estates
        </h1>
        <p className="mt-4 text-lg text-blue-100">
          Building trust. Creating value. Delivering excellence.
        </p>
      </div>

      {/* Main Content */}
      <AboutSection />

      {/* Extra Content ONLY for About Page */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-amber-500">10+</h3>
            <p className="text-gray-600 mt-2">Years of Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-amber-500">500+</h3>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-amber-500">50+</h3>
            <p className="text-gray-600 mt-2">Projects Delivered</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
