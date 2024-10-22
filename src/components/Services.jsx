import React from 'react'
import Workercard from './Workercard';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';




function Services() {
  return (
    <>
    <div className=" h-screen bg-gray-100">
    
    <h1 className = " bg-blue-400 text-center my-12 rounded-full text-4xl justify-items-stretch h-8 py- 12 w-1/2 px-10 content-center " > Choose By Your Own  </h1>
    
    <div className="flex justify-center items-center ">
   
      {/* Pass the props to WorkerCard */}
      <Workercard
        name="John Doe"                          // Pass the worker's name
        profession="Plumber"                     // Pass the profession
        imageUrl="https://via.placeholder.com/150" // Pass the profile image URL
        rating={4}                               // Pass the rating (out of 5)
        description="John is highly skilled and punctual. He fixed all my plumbing issues quickly and efficiently!" // Pass a short description
      />
      <br />
      <Workercard
        name="Deepanshu "                          // Pass the worker's name
        profession="Electrician"                     // Pass the profession
        imageUrl="https://via.placeholder.com/150" // Pass the profile image URL
        rating={5}                               // Pass the rating (out of 5)
        description="Deepanshu is highly skilled and punctual. He fixed all my electrical issues quickly and efficiently!" // Pass a short description
      />
      <Workercard
        name="Jonny   "                          // Pass the worker's name
        profession="Home Cleaner"                     // Pass the profession
        imageUrl="https://via.placeholder.com/150" // Pass the profile image URL
        rating={1}                               // Pass the rating (out of 5)
        description="Aprita is highly skilled and punctual in wasting time and your precious money" // Pass a short description
      />
      
      </div>
    </div>
    </>
  )
}

export default Services