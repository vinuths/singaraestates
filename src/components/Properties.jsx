import React from "react";
import { Link } from "react-router-dom";
import property1 from "../assets/property1.jpg";
import property2 from "../assets/property2.jpg";

const properties = [
  { id: 1, name: "Luxury Villa", image: property1 },
  { id: 2, name: "Modern Apartment", image: property2 },
  { id: 3, name: "Commercial Office", image: property1 },
];

const Properties = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-10">Our Properties</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((p) => (
            <Link key={p.id} to="/properties" className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <img src={p.image} alt={p.name} className="w-full h-56 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-gray-800">{p.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
