import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-500 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Sell hell</h3>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="/about" className="hover:text-teal-200">
            About
          </a>
          <a href="/contact" className="hover:text-teal-200">
            Contact
          </a>
          <a href="/privacy" className="hover:text-teal-200">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
