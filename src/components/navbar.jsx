import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import  { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          HomeServices
        </div>

        {/* Menu Button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>

        {/* Links for desktop and mobile */}
        <div className={`md:flex items-center space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/services" className="text-white hover:text-gray-300">Services</a>
          <a href="/about" className="text-white hover:text-gray-300">About Us</a>
          <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
          <a href="/Workercard" className="text-white hover:text-gray-300">Worker Card</a>
          <button href= "/Singup" className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-100">
          Login/Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;