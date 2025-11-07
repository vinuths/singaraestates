import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaHome } from "react-icons/fa";
import property1 from "../assets/property1.jpg";
import property2 from "../assets/property2.jpg";
import property3 from "../assets/property3.jpg"; // 👈 Add a 3rd image if available

const properties = [
  {
    id: 1,
    name: "Luxury Villa",
    image: property1,
    location: "Kodaikanal Hills",
    price: "₹2.5 Cr",
    type: "Villa",
  },
  {
    id: 2,
    name: "Modern Apartment",
    image: property2,
    location: "Coimbatore City",
    price: "₹1.2 Cr",
    type: "Apartment",
  },
  {
    id: 3,
    name: "Commercial Office Space",
    image: property3,
    location: "Ooty Main Road",
    price: "₹3.8 Cr",
    type: "Office",
  },
];

const Properties = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Explore Our Premium Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover handpicked real estate opportunities that combine elegance,
            comfort, and prime locations — perfect for modern living or
            investment.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {properties.map((p) => (
            <div
              key={p.id}
              className="relative group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Property Image */}
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Link
                    to={`/properties/${p.id}`}
                    className="bg-amber-400 text-blue-900 font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-amber-300 transition"
                  >
                    View Details
                  </Link>
                </div>

                {/* Type Tag */}
                <span className="absolute top-4 left-4 bg-amber-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                  {p.type}
                </span>
              </div>

              {/* Property Details */}
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {p.name}
                </h3>

                <div className="flex items-center text-gray-500 mb-3">
                  <FaMapMarkerAlt className="mr-2 text-amber-400" />
                  <span>{p.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-900">
                    {p.price}
                  </span>
                  <Link
                    to={`/properties/${p.id}`}
                    className="text-amber-500 font-medium hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link
            to="/properties"
            className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-blue-800 transition duration-300"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Properties;
