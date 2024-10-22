import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Welcome to HomeServices, your go-to platform for finding trusted and skilled professionals
          such as plumbers, electricians, carpenters, home cleaners, and more. We are committed to 
          providing you with quick and easy access to the services you need, right at your doorstep.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our mission is to simplify the process of finding reliable service providers for 
          your home needs. Whether it's fixing a leaky faucet, rewiring your home, or cleaning 
          your living space, we ensure that you receive quality service from highly skilled 
          professionals. We vet each service provider to ensure they meet our standards of 
          professionalism and expertise.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          With HomeServices, you can rest assured that your home is in good hands. Our platform 
          is built on trust, reliability, and quality service. Let us take care of your home, 
          so you can focus on what matters most.
        </p>
      </div>
    </div>
  );
};

export default About;