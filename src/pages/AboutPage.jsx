import React from "react";
import AboutSection from "../components/AboutSection";
import {
  FaLeaf,
  FaBuilding,
  FaCity,
  FaCheckCircle,
  FaShieldAlt,
  FaFileContract,
  FaHandshake,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="pt-28 bg-gray-50">
      {/* ================= PAGE HEADER ================= */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          About Singara Estates & Properties
        </h1>
        <p className="mt-5 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
          Trusted real estate developers shaping farmlands, layouts, apartments,
          and premium buildings with transparency, quality, and long-term value.
        </p>
      </div>

      {/* ================= ABOUT SECTION (REUSABLE) ================= */}
      <AboutSection />

      {/* ================= DEVELOPMENT PHILOSOPHY ================= */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Our Development Philosophy
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            At Singara Estates, we don’t just sell land or buildings — we create
            secure investments and sustainable living spaces. Every project is
            carefully planned with legal clarity, infrastructure readiness, and
            future growth potential in mind.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <FaShieldAlt className="text-amber-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Trust & Transparency
              </h3>
              <p className="text-gray-600">
                Clear titles, approved layouts, and honest communication at
                every stage.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <FaCity className="text-amber-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Planned Development
              </h3>
              <p className="text-gray-600">
                Well-designed layouts, proper roads, drainage, and essential
                infrastructure.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <FaHandshake className="text-amber-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Long-Term Value
              </h3>
              <p className="text-gray-600">
                Properties developed for appreciation, usability, and peace of
                mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DEVELOP ================= */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            What We Develop
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
            <div className="bg-blue-800 rounded-2xl p-8 text-center hover:bg-blue-700 transition">
              <FaLeaf className="text-amber-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Farmland Projects</h3>
              <p className="text-blue-100">
                Secure agricultural and investment farmlands with planned
                access.
              </p>
            </div>

            <div className="bg-blue-800 rounded-2xl p-8 text-center hover:bg-blue-700 transition">
              <FaCity className="text-amber-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Layout Development</h3>
              <p className="text-blue-100">
                DTCP / Panchayat-approved residential and commercial layouts.
              </p>
            </div>

            <div className="bg-blue-800 rounded-2xl p-8 text-center hover:bg-blue-700 transition">
              <FaBuilding className="text-amber-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Apartments</h3>
              <p className="text-blue-100">
                Ready-to-move and under-development apartment projects.
              </p>
            </div>

            <div className="bg-blue-800 rounded-2xl p-8 text-center hover:bg-blue-700 transition">
              <FaBuilding className="text-amber-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Buildings & Villas</h3>
              <p className="text-blue-100">
                Premium buildings and villas in high-growth locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEGAL & TRUST ASSURANCE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
            Legal Assurance & Transparency
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3" />
                Clear title & verified ownership
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3" />
                Approved layouts and permissions
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3" />
                Transparent pricing & documentation
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3" />
                End-to-end support till registration
              </li>
            </ul>

            <div className="bg-gray-100 rounded-2xl p-8 shadow-inner">
              <FaFileContract className="text-amber-400 text-5xl mb-4" />
              <p className="text-gray-700 text-lg leading-relaxed">
                Every Singara Estates project goes through strict legal and
                technical verification, ensuring our clients invest with
                confidence and zero stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-bold text-amber-500">10+</h3>
            <p className="text-gray-600 mt-2">Years of Industry Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-amber-500">300+</h3>
            <p className="text-gray-600 mt-2">
              Properties Developed & Sold
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-amber-500">40+</h3>
            <p className="text-gray-600 mt-2">
              Completed Projects & Layouts
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
