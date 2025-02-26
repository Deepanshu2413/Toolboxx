import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-blue-500 text-white py-6 effect-none " >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold">HomeServices</h1>
              <p className="text-gray-400">Your one-stop service provider</p>
            </div>
  
            {/* Links */}
            <div className="flex flex-col md:flex-row">
                <ul>
                    <li>
              <a href="/" className="hover:underline mx-2">
                Home
              </a>
              </li>
                <li>
              <a href="/services" className="hover:underline mx-2">
                Services
              </a>
              </li>
              <li>
              <a href="/about" className="hover:underline mx-2">
                About Us
              </a>
              </li>
              <li>
              <a href="/contact" className="hover:underline mx-2">
                Contact
              </a>
              </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom text */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} HomeServices. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  


export default Footer;