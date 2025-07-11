import React from "react";
import { motion } from 'framer-motion';

const Book = () => {
  return (
    <>
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src="/images/leadership.png" 
          alt="Book a Coaching Session" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.h1 
            className="text-white text-4xl md:text-6xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Book a Session
          </motion.h1>
        </div>
      </section>

      <section className="text-center py-16 px-4 flex flex-col justify-center">
        <h4 className="text-sm text-black uppercase tracking-wide mb-2 text-brand">Personal Coaching</h4>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Empower Your Journey</h1>
        <p className="text-black max-w-2xl mx-auto mt-4">
          Ready to unlock your full potential? Book a one-on-one coaching session tailored to your unique leadership and personal development goals. Whether you're navigating a career transition, growing a business, or seeking clarity in your vision, this session will provide the tools and perspective you need to move forward with confidence.
        </p>
      </section>

      {/* Sign Up Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          
          {/* Booking Form */}
          <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Book Your Session</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="0712 345 678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Tell us what you’d like to focus on during your session..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Book Now
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img 
              src="/images/women.webp" 
              alt="Book Coaching Session" 
              className="rounded-lg shadow-md object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;
