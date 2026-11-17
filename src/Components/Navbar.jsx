import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
     <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="/" className="flex items-center gap-2">
          <span className="text-3xl">🌍</span>
          <h1 className="text-2xl font-bold text-blue-600">
            Country Explorer
          </h1>
        </a>

        <div className="flex items-center gap-6">
          <a
            href="/"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Home
          </a>

          <a
            href="#countries"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Countries
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;