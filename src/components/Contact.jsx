import React from 'react'

function Contact() {
  return (
    <>

    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Whether you have questions about our services, need assistance, or want to book a professional, we are here to help you!
          </p>
          <p className="text-gray-600">
            You can contact us through the form below or via our email at <a href="mailto:support@homeservices.com" className="text-blue-500">support@homeservices.com</a>.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>

          <form>
            {/* Name Input */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="mt-10 text-center">
          <h3 className="text-lg font-semibold mb-4">You can also reach us at:</h3>
          <p className="text-gray-600">
            <strong>Email:</strong> support@homeservices.com
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +1-234-567-8900
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> 123 HomeServices Street, City, Country
          </p>
        </div>
      </div>
    </div>
  


    
    </>
  )
}

export default Contact