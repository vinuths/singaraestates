import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary" required />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary" required />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary" rows="4" required />
      </div>
      <button type="submit" className="bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary transition w-full">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
