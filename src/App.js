import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PropertiesPage from "./pages/PropertiesPage";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import About from "./components/About";
import PropertyDetails from "./pages/PropertyDetails";
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/about" element={<About />} />
           <Route path="/properties/:id" element={<PropertyDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
