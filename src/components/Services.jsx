import React from "react";
import {
  FaHome,
  FaBuilding,
  FaTree,
  FaCity,
  FaMap,
  FaFileContract,
} from "react-icons/fa";

const services = [
  {
    title: "Farmland Development",
    desc: "Planned farmland development projects with clear titles, internal roads, and long-term investment value.",
    icon: <FaTree className="text-5xl text-amber-400 mb-4" />,
  },
  {
    title: "Approved Layout Development",
    desc: "Government-approved residential layouts developed with proper infrastructure, drainage, and road access.",
    icon: <FaMap className="text-5xl text-amber-400 mb-4" />,
  },
  {
    title: "Residential Buildings",
    desc: "Individually developed residential buildings constructed with quality standards and clear legal approvals.",
    icon: <FaBuilding className="text-5xl text-amber-400 mb-4" />,
  },
  {
    title: "Apartment Projects",
    desc: "Well-designed apartment projects built and sold directly by us, ensuring transparency and trust.",
    icon: <FaCity className="text-5xl text-amber-400 mb-4" />,
  },
  {
    title: "Plot & Property Sales",
    desc: "Sale of plots, farmlands, buildings, and apartments developed exclusively under Singara Estates projects.",
    icon: <FaHome className="text-5xl text-amber-400 mb-4" />,
  },
  {
    title: "Legal & Documentation Support",
    desc: "Complete documentation assistance including sale deeds, approvals, and registration for our projects.",
    icon: <FaFileContract className="text-5xl text-amber-400 mb-4" />,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At <span className="font-semibold text-amber-500">Singara Estates</span>,
            we specialize in developing and selling our own real estate projects —
            focusing on farmland, approved layouts, residential buildings, and
            apartments with complete transparency and legal clarity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-900 hover:to-blue-800 group"
            >
              <div className="flex justify-center">{s.icon}</div>

              <h3 className="text-2xl font-semibold mb-3 mt-2 text-blue-900 group-hover:text-white transition-colors">
                {s.title}
              </h3>

              <p className="text-gray-600 group-hover:text-gray-100 transition-colors leading-relaxed">
                {s.desc}
              </p>

              <div className="mt-6 w-16 h-1 bg-amber-400 mx-auto rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="bg-amber-400 text-blue-900 font-semibold px-8 py-3 rounded-full text-lg shadow-md hover:bg-amber-300 transition duration-300"
          >
            Enquire About Our Projects
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
