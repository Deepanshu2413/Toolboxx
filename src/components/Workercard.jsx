import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



const Workercard = ({ name, profession, imageUrl, rating, description }) => {
  // Helper function to render the star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 text-yellow-500"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-sm  overflow-hidden shadow-lg bg-blue-400 mx-4 rounded-2xl justify-evenly" >
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{profession}</p>
        <div className="flex items-center mt-2">
          {renderStars(rating)}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Workercard;