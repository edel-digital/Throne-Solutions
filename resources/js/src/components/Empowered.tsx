import React from "react";
import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <>
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src="/images/leadership.png" 
          alt="Mental health support" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.h1 
            className="text-white text-4xl md:text-6xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h1>
        </div>
      </section>

      <section className="text-center py-16 px-4 flex flex-col justify-center">
        <h4 className="text-sm text-black uppercase tracking-wide mb-2 text-brand">Women In Business</h4>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Empower and Thrive</h1>
        <p className="text-black max-w-2xl mx-auto mt-4">
          An Afternoon of Fun, Learning, and Networking for Entrepreneurs! Are you ready to take your business skills to the next level? Join us for an interactive, practical, and engaging workshop designed to help you gain real-world business insights. This isn’t just a class—it’s an exciting, hands-on experience where you’ll learn key entrepreneurial skills, from managing finances to building a strong team. Network with like-minded businesswomen and youth entrepreneurs, share your journey, and leave with strategies you can implement immediately. Come prepared for a fun and transformational afternoon that will inspire your next steps!
        </p>
      </section>

      {/* Sign Up Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          
          {/* Sign Up Form */}
          <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign Up for the Event</h2>
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
      placeholder="Tell us what you hope to gain from the event..."
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
  >
    Register Now
  </button>
</form>

          </div>

          {/* Image Placeholder */}
          <div className="w-full md:w-1/2">
            <img 
              src="/images/women.webp" 
              alt="Event Signup" 
              className="rounded-lg shadow-md object-cover w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
