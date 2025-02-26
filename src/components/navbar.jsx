import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from './logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={myImage} alt="Logo" className="w-16 h-16" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`absolute md:static bg-blue-500 md:bg-transparent w-full md:w-auto left-0 top-16 p-4 md:p-0 md:flex items-center space-x-6 transition-all duration-300 ${isOpen ? 'block' : 'hidden md:flex'}`}>
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/Services" className="text-white hover:text-gray-300">Services</Link>
          <Link to="/About" className="text-white hover:text-gray-300">About Us</Link>
          <Link to="/Contact" className="text-white hover:text-gray-300">Contact</Link>
          <Link to="/Signup" className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-100">
            Login/Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;