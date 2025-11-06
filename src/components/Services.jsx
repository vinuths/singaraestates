import React from "react";

const services = [
  { title: "Residential Properties", desc: "Luxury homes and apartments in prime locations." },
  { title: "Commercial Properties", desc: "Business spaces with modern design." },
  { title: "Property Consultation", desc: "Expert advice for buyers and sellers." },
];

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
