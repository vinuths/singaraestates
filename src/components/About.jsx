import React from "react";
import { FaBuilding, FaHandsHelping, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>

      <div className="relative container mx-auto px-6">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-center text-blue-900 mb-6">
          About <span className="text-amber-500">Singara Estates</span>
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700 text-lg md:text-xl mb-12">
          At <span className="font-semibold text-blue-900">Singara Estates and Properties</span>,
          we craft homes and commercial spaces that blend innovation, comfort,
          and sustainability. With years of expertise, we’ve built a reputation
          grounded in trust, transparency, and timeless design.
        </p>

        {/* Mission / Vision / Values */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10">
          <div className="bg-white shadow-lg rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 text-center">
            <FaBuilding className="text-4xl text-blue-700 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To deliver exceptional real estate projects that inspire modern living and
              elevate lifestyle standards while maintaining transparency and trust.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 text-center">
            <FaLightbulb className="text-4xl text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become a leading name in sustainable real estate development, known for
              innovation, design excellence, and long-term value creation.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 text-center">
            <FaHandsHelping className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Integrity, customer satisfaction, quality construction, and a commitment to
              innovation define our journey at every step.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-500 hover:text-blue-900 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
