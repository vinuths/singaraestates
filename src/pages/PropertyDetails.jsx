import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaMapMarkerAlt, FaHome, FaCheckCircle } from "react-icons/fa";
import property1 from "../assets/property1.jpg";
import property2 from "../assets/property2.jpg";
import property3 from "../assets/property3.jpg";

const PropertyDetails = () => {
  const { id } = useParams();
  const propertyId = Number(id);

  // Hardcoded property details
  const property = (() => {
    switch (propertyId) {
      case 1:
        return {
          name: "Luxury Villa",
          image: property1,
          location: "Kodaikanal Hills",
          price: "₹2.5 Cr",
          type: "Villa",
          description:
            "A premium luxury villa located in the serene hills of Kodaikanal, offering breathtaking views, modern architecture, and a peaceful lifestyle ideal for weekend retreats and long-term investment.",
          highlights: [
            "Hill view location",
            "Premium gated community",
            "Clear legal documentation",
            "Excellent rental potential",
          ],
        };
      case 2:
        return {
          name: "Modern Apartment",
          image: property2,
          location: "Coimbatore City",
          price: "₹1.2 Cr",
          type: "Apartment",
          description:
            "A contemporary apartment project located in the heart of Coimbatore, designed for urban comfort with excellent connectivity, modern amenities, and strong appreciation value.",
          highlights: [
            "Prime city location",
            "Lift & power backup",
            "Close to IT parks & schools",
            "High resale value",
          ],
        };
      case 3:
        return {
          name: "Commercial Office Space",
          image: property3,
          location: "Ooty Main Road",
          price: "₹3.8 Cr",
          type: "Office",
          description:
            "A high-visibility commercial property suitable for offices, showrooms, and investment purposes, located on a main road with excellent footfall.",
          highlights: [
            "Main road frontage",
            "Ideal for commercial use",
            "High ROI investment",
            "Immediate possession",
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
    <div className="pt-28 bg-gray-50 min-h-screen">
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

          <div className="flex gap-6 items-center mb-6">
            <span className="text-xl font-bold text-blue-900">{property.price}</span>
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
