import React from "react";
import { FaHome, FaBuilding, FaHandshake } from "react-icons/fa"; // 👈 icons from react-icons

const services = [
  {
    title: "Residential Properties",
    desc: "Luxury homes and premium apartments in top neighborhoods designed for comfort and class.",
    icon: <FaHome className="text-5xl text-amber-400 mb-4" />,
  },
  {
    title: "Commercial Properties",
    desc: "Modern commercial and office spaces built for productivity, innovation, and growth.",
    icon: <FaBuilding className="text-5xl text-amber-400 mb-4" />,
  },
  {
    title: "Property Consultation",
    desc: "Personalized property consulting services to help you buy, sell, or invest confidently.",
    icon: <FaHandshake className="text-5xl text-amber-400 mb-4" />,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At <span className="font-semibold text-amber-500">Singara Estates</span>, we go beyond just selling properties — we help you find your dream space, grow your investments, and achieve real estate success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-900 hover:to-blue-800 group"
            >
              {/* Icon */}
              <div className="flex justify-center">{s.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 mt-2 text-blue-900 group-hover:text-white transition-colors">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 group-hover:text-gray-100 transition-colors leading-relaxed">
                {s.desc}
              </p>

              {/* Accent Line */}
              <div className="mt-6 w-16 h-1 bg-amber-400 mx-auto rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-amber-400 text-blue-900 font-semibold px-8 py-3 rounded-full text-lg shadow-md hover:bg-amber-300 transition duration-300">
            Explore More Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
