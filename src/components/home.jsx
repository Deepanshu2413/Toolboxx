import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
          {/* Hero Section */}
          <section className="bg-blue-500 text-white py-20">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Find Trusted Plumbers, Electricians & More!</h1>
              <p className="text-xl mb-6">Get help from verified professionals for all your home service needs.</p>
              <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-100">
                Book a Service Now
              </button>
            </div>
          </section>
    
          {/* Service Categories */}
          <section className="py-20">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard title="Plumber" description="Get plumbing repairs and installations done by experts." />
                <ServiceCard title="Electrician" description="Fix electrical issues with our trusted electricians." />
                <ServiceCard title="Home Cleaner" description="Book a professional home cleaner for spotless results." />
                <ServiceCard title="Carpenter" description="Hire skilled carpenters for your home improvement needs." />
                <ServiceCard title="Maid Provider" description="Find reliable maids for regular housekeeping." />
              </div>
            </div>
          </section>
    
          {/* How it Works */}
          <section className="bg-gray-50 py-20">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-4">1. Search for Services</h3>
                  <p>Find the service you need by browsing our categories or using the search bar.</p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-4">2. Book a Service</h3>
                  <p>Pick a convenient time, and book a service provider instantly.</p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-4">3. Get Your Job Done</h3>
                  <p>Our verified professionals will complete the job to your satisfaction.</p>
                </div>
              </div>
            </div>
          </section>
    
          {/* Testimonials */}
          <section className="py-20">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <TestimonialCard
                  name="John Doe"
                  feedback="Excellent service! The plumber arrived on time and fixed my leaking sink quickly."
                />
                <TestimonialCard
                  name="Jane Smith"
                  feedback="The electrician was professional and fixed my wiring issue in no time."
                />
                <TestimonialCard
                  name="Michael Lee"
                  feedback="Great experience! The home cleaner did a fantastic job, my house is spotless!"
                />
              </div>
            </div>
          </section>
        </div>
      );
    };
    
    // Reusable Service Card Component (define it before using)
    const ServiceCard = ({ title, description }) => (
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Book Now</button>
      </div>
    );
    
    // Reusable Testimonial Card Component
    const TestimonialCard = ({ name, feedback }) => (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-600 mb-4">"{feedback}"</p>
        <h4 className="text-xl font-semibold">{name}</h4>
      </div>
    );

export default Home