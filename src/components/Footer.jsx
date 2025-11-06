import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Singara Estates. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
