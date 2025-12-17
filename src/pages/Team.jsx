import React from "react";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    name: "Prasana",
    role: "Director",
    image: "https://via.placeholder.com/300x300",
  },
  {
    name: "Ramesh",
    role: "Director",
    image: "https://via.placeholder.com/300x300",
  },
  {
    name: "Deepak TR",
    role: "Director",
    image: "https://via.placeholder.com/300x300",
  },
  {
    name: "Vinuth S",
    role: "Director",
    image: "https://via.placeholder.com/300x300",
  },
];

const Team = () => {
  return (
    <div className="pt-28 bg-gray-50 min-h-screen">
      {/* ================= HEADER ================= */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-3">
          Our Leadership Team
        </h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Visionary leaders driving growth, trust, and excellence in real estate
          development.
        </p>
      </div>

      {/* ================= TEAM GRID ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden text-center"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-500 font-medium mb-4">
                  {member.role}
                </p>

                {/* Divider */}
                <div className="w-12 h-1 bg-amber-400 mx-auto mb-4 rounded-full"></div>

                {/* Social / Contact (placeholders) */}
                <div className="flex justify-center gap-4">
                  <span className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-900 text-white hover:bg-blue-800 transition cursor-pointer">
                    <FaLinkedinIn />
                  </span>
                  <span className="w-9 h-9 flex items-center justify-center rounded-full bg-amber-400 text-blue-900 hover:bg-amber-300 transition cursor-pointer">
                    <FaEnvelope />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FOOT NOTE ================= */}
      <div className="text-center pb-16">
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our leadership team brings deep industry expertise, ethical practices,
          and a shared commitment to delivering high-quality real estate
          developments with long-term value.
        </p>
      </div>
    </div>
  );
};

export default Team;
