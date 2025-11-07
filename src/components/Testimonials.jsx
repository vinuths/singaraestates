import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Rohit Sharma",
    role: "Homeowner",
    image: client1,
    rating: 5,
    feedback:
      "Singara Estates helped me find my dream home! The team was professional, responsive, and made the entire process seamless.",
  },
  {
    id: 2,
    name: "Anita Kapoor",
    role: "Investor",
    image: client2,
    rating: 4,
    feedback:
      "Excellent service and advice. Their expertise in the local market helped me make a great investment.",
  },
  {
    id: 3,
    name: "Suresh Menon",
    role: "Business Owner",
    image: client3,
    rating: 5,
    feedback:
      "I leased a commercial property through Singara Estates. The team handled everything efficiently and professionally.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our clients trust us to deliver exceptional service and quality properties. Here’s what they have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 group"
            >
              <FaQuoteLeft className="text-amber-400 text-3xl mb-4" />

              <p className="text-gray-700 italic mb-6 group-hover:text-gray-900 transition">
                "{t.feedback}"
              </p>

              <div className="flex items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-amber-400"
                />
                <div>
                  <h4 className="text-lg font-semibold text-blue-900">{t.name}</h4>
                  <p className="text-gray-500 text-sm mb-1">{t.role}</p>
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < t.rating ? "text-amber-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-blue-800 transition duration-300">
            Join Our Happy Clients
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
