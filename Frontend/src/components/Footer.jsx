// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Event Planners 360</h2>
            <p className="text-sm">© {new Date().getFullYear()} Event Planners 360. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
