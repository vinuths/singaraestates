import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { sendEmail } from "../email"; // make sure path is correct

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    sendEmail(formData)
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error.text);
        alert("Oops! Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative container mx-auto px-6 lg:px-20">
        <h2 className="text-5xl font-extrabold text-center mb-6">
          Get in <span className="text-amber-400">Touch</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto text-blue-100 mb-12">
          Have a question or want to work with us? Fill out the form below and
          our team will get back to you shortly.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 text-blue-100">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl text-amber-400" />
              <div>
                <h3 className="text-xl font-semibold">Our Office</h3>
                <p> Bengaluru,karnataka</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-3xl text-amber-400" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p>9743880882</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-3xl text-amber-400" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p>contact@singaraestates.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block mb-2 font-semibold text-white">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div className="mt-6">
              <label className="block mb-2 font-semibold text-white">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div className="mt-6">
              <label className="block mb-2 font-semibold text-white">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full bg-amber-400 text-blue-900 py-3 rounded-lg font-bold text-lg hover:bg-amber-300 transition duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
