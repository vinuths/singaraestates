import React from "react";

const teamMembers = [
  {
    name: "Prasana",
    role: "Director",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ramesh",
    role: "Director",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Deepak TR",
    role: "Director",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Vinuth S",
    role: "Director",
    image: "https://via.placeholder.com/150",
  },
];

const Team = () => {
  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-900 mb-10 text-center">
        Our Leadership Team
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center"
          >
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-amber-400"
            />

            {/* Name & Role */}
            <h3 className="text-lg font-semibold text-blue-900">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
