import React from 'react';
import Workercard from './Workercard';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Services() {
  // Worker data array for cleaner code
  const workers = [
    {
      name: "John Doe",
      profession: "Plumber",
      imageUrl: "https://via.placeholder.com/150",
      rating: 4,
      description: "John is highly skilled and punctual. He fixed all my plumbing issues quickly and efficiently!"
    },
    {
      name: "Deepanshu",
      profession: "Electrician",
      imageUrl: "https://via.placeholder.com/150",
      rating: 5,
      description: "Deepanshu is highly skilled and punctual. He fixed all my electrical issues quickly and efficiently!"
    },
    {
      name: "Jonny",
      profession: "Home Cleaner",
      imageUrl: "https://via.placeholder.com/150",
      rating: 2,
      description: "Jonny is highly skilled and punctual in finishing work in time."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-8">
      {/* Page Heading */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="bg-blue-300 text-white text-2xl md:text-4xl font-semibold py-4 px-8 rounded-full text-center">
          Choose By Your Own
        </h1>
      </div>

      {/* Workers Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workers.map((worker, index) => (
          <Workercard
            key={index}
            name={worker.name}
            profession={worker.profession}
            imageUrl={worker.imageUrl}
            rating={worker.rating}
            description={worker.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;