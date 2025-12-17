import React from "react";
import { FaBuilding, FaHandsHelping, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>

      <div className="relative container mx-auto px-6">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-center text-blue-900 mb-6">
          About <span className="text-amber-500">Singara Estates</span>
        </h2>

        <p className="text-center max-w-3xl mx-auto text-gray-700 text-lg md:text-xl mb-12">
          <span className="font-semibold text-blue-900">
            Singara Estates and Properties
          </span>{" "}
          is a professionally managed real estate firm specializing in{" "}
          <strong>farmland development</strong>,{" "}
          <strong>approved layout development</strong>, and the{" "}
          <strong>sale of residential buildings and apartments</strong>.
          We focus on delivering legally compliant, well-planned properties
          that offer long-term value, clarity of ownership, and peace of mind
          to our clients.
        </p>

        {/* Mission / Vision / Values */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10">
          {/* Mission */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 text-center">
            <FaBuilding className="text-4xl text-blue-700 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To develop and offer high-quality farmland projects, residential
              layouts, and ready-to-move properties that meet regulatory
              standards while ensuring transparency, trust, and customer
              satisfaction at every stage.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 text-center">
            <FaLightbulb className="text-4xl text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be a trusted and recognized name in real estate development,
              known for professionally planned farmland communities, well-laid
              residential layouts, and value-driven property investments.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 text-center">
            <FaHandsHelping className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Our Values
            </h3>
            <p className="text-gray-600">
              Integrity, legal compliance, transparent dealings, and a
              customer-first approach guide our operations. We focus solely on
              our own developments and do not undertake third-party construction
              projects.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link
            to="/properties"
            className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-500 hover:text-blue-900 transition-all duration-300 inline-block"
          >
            Explore Our Projectsrioj
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
