import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import property1 from "../assets/property1.jpg";
import property2 from "../assets/property2.jpg";
import property3 from "../assets/property3.jpg";

const properties = [
  {
    id: 1,
    name: "Premium Farmland Development",
    image: property1,
    location: "North Bengaluru",
    price: "Starting from ₹35 Lakhs",
    type: "Farmland",
  },
  {
    id: 2,
    name: "Approved Residential Layout",
    image: property2,
    location: "Devanahalli",
    price: "Plots from ₹4,999 / sq.ft",
    type: "Layout",
  },
  {
    id: 3,
    name: "Residential Apartments",
    image: property3,
    location: "East Bengaluru",
    price: "Starting from ₹65 Lakhs",
    type: "Apartments",
  },
];

const Properties = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Our Ongoing Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore legally approved farmland developments, residential layouts,
            and apartments built with long-term value and complete transparency.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />

                <span className="absolute top-4 left-4 bg-amber-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {p.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {p.name}
                </h3>

                <div className="flex items-center text-gray-500 mb-3">
                  <FaMapMarkerAlt className="mr-2 text-amber-400" />
                  {p.location}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-700">
                    {p.price}
                  </span>
                  <Link
                    to={`/properties/${p.id}`}
                    className="text-amber-500 font-semibold hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/properties"
            className="inline-block bg-blue-900 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-800 transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Properties;
