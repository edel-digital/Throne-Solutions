import React from 'react';

const Email = () => {
  return (
    <section
      className="w-full px-6 py-16 bg-white text-gray-800"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-black mb-4">
          Getting in touch is simpler than ever
        </h1>
        <h3 className="text-xl text-gray-700 mb-8">
          Leave us an email
        </h3>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Leave us an email"
            className="w-full sm:w-96 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="bg-brand hover:bg-brand/90 text-white text-sm font-medium px-6 py-3 rounded-full transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Email;
