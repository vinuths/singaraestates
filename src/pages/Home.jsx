import React, { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Properties from "../components/Properties";
import Testimonials from "../components/Testimonials";
import { FaWhatsapp, FaEnvelope, FaTimes } from "react-icons/fa";

const Home = () => {
  const [openChat, setOpenChat] = useState(false);

  // WhatsApp & Email
  const whatsappNumber = "919876543210"; // Replace with your number
  const emailAddress = "contact@singaraestates.com"; // Replace with your email

  const messages = [
    "I am interested in your villa projects",
    "Tell me more about layout development",
    "I want to inquire about farm plots",
    "Other inquiries",
  ];

  const sendWhatsApp = (msg) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const sendEmail = () => {
    // Opens default mail client
    window.location.href = `mailto:${emailAddress}?subject=Inquiry from Website`;
  };

  return (
    <div className="bg-gray-50 text-gray-900 relative">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
        <Hero />
      </section>

      {/* About */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <About />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Singara Estates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Trusted Developers", "20+ years of real estate excellence"],
              ["Legal Transparency", "100% verified properties & documents"],
              ["Premium Locations", "High ROI & future growth"],
            ].map(([title, desc], i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gradient-to-r from-amber-400 to-yellow-500 py-16 px-8 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <Services />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-900 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            ["500+", "Happy Clients"],
            ["120+", "Projects Completed"],
            ["25+", "Prime Locations"],
            ["15+", "Years Experience"],
          ].map(([num, label], i) => (
            <div key={i}>
              <h3 className="text-4xl font-extrabold text-amber-400">{num}</h3>
              <p className="mt-2 text-blue-100">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Properties */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <Properties />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <Testimonials />
        </div>
      </section>

      {/* CTA */}
      {/* <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16 px-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Looking for Your Dream Property?
        </h2>
        <p className="mb-6 text-blue-100">
          Talk to our experts and book a site visit today.
        </p>
        <a
          href="/contact"
          className="inline-block bg-amber-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-300 transition"
        >
          Contact Us
        </a>
      </section> */}

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Singara Estates. All rights reserved.</p>
      </footer>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {/* Expandable Messages */}
        {openChat && (
          <div className="flex flex-col gap-3 mb-2">
            {messages.map((msg, i) => (
              <button
                key={i}
                onClick={() => sendWhatsApp(msg)}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg"
              >
                <FaWhatsapp /> {msg}
              </button>
            ))}
            {/* Email Button */}
            <button
              onClick={sendEmail}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
            >
              <FaEnvelope /> Email Us
            </button>
          </div>
        )}

        {/* Chat Toggle */}
        <button
          onClick={() => setOpenChat(!openChat)}
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg text-2xl relative"
        >
          {openChat ? <FaTimes /> : <FaWhatsapp />}
        </button>
      </div>
    </div>
  );
};

export default Home;
