import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import property1 from "../assets/property1.jpg";
import property2 from "../assets/property2.jpg";
import property3 from "../assets/property3.jpg";

const PropertyDetails = () => {
  const { id } = useParams();
  const propertyId = Number(id);

  const property = (() => {
    switch (propertyId) {
      case 1:
        return {
          name: "Premium Farmland Development",
          image: property1,
          location: "North Bengaluru",
          price: "Starting from ₹35 Lakhs",
          type: "Farmland",
          description:
            "A well-planned farmland development project designed for long-term investment, weekend living, and sustainable growth. The project features clear documentation, proper access roads, and future-ready planning.",
          highlights: [
            "Clear title & legal approval",
            "Well-laid internal roads",
            "Ideal for long-term investment",
            "Peaceful & green surroundings",
          ],
        };

      case 2:
        return {
          name: "Approved Residential Layout",
          image: property2,
          location: "Devanahalli",
          price: "Plots from ₹4,999 / sq.ft",
          type: "Layout",
          description:
            "An approved residential layout developed with proper planning, drainage, and road connectivity. Suitable for individual house construction and future appreciation.",
          highlights: [
            "Government approved layout",
            "Wide roads & proper drainage",
            "Good connectivity",
            "High appreciation potential",
          ],
        };

      case 3:
        return {
          name: "Residential Apartments",
          image: property3,
          location: "East Bengaluru",
          price: "Starting from ₹65 Lakhs",
          type: "Apartments",
          description:
            "Modern residential apartments built with quality construction standards, designed for comfortable urban living with essential amenities and easy accessibility.",
          highlights: [
            "Quality construction",
            "Ready-to-move options",
            "Good rental demand",
            "Clear ownership documents",
          ],
        };

      default:
        return null;
    }
  })();

  if (!property) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-2xl font-semibold">Property not found</h2>
        <Link to="/properties" className="text-amber-500 underline">
          Back to Properties
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Image */}
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
        />

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            {property.name}
          </h1>

          <div className="flex items-center text-gray-600 mb-4">
            <FaMapMarkerAlt className="mr-2 text-amber-500" />
            {property.location}
          </div>

          <div className="flex flex-wrap gap-4 items-center mb-6">
            <span className="text-xl font-bold text-green-700">
              {property.price}
            </span>
            <span className="bg-amber-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">
              {property.type}
            </span>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {property.description}
          </p>

          {/* Highlights */}
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Key Highlights
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 mb-10">
            {property.highlights.map((item, i) => (
              <li key={i} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-green-600 mr-2" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+919999999999"
              className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition"
            >
              WhatsApp Enquiry
            </a>
            <Link
              to="/properties"
              className="border border-blue-900 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
            >
              Back to Properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
