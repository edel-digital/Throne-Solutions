import React from 'react';

const SafariSection = () => {
  const safariPackages = [
    {
      title: "3 Days Best of Kenya",
      image: "/images/kenya-1.jpg",
    },
    {
      title: "Masai Mara Experience",
      image: "/images/kenya-2.jpg",
    },
    {
      title: "Amboseli Adventure",
      image: "/images/kenya-3.jpg",
    },
  ];

  return (
    <section
      className="min-h-screen w-full px-6 py-16 text-white antialiased"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto text-left mb-12">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide mb-2 text-center">KENYA</h4>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">SAFARI BEST PACKAGES</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-center">
          Our Selection Of Kenya Safari Tours allow you to experience an array of game reserves. Discover the wildlife, 
          culture and landscapes, with a personalized authentic safaris
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {safariPackages.map((pkg, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center h-72 rounded-lg overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${pkg.image})` }}
          >
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
              <h2 className="text-xl font-semibold mb-3">{pkg.title}</h2>
              <div className="flex items-center justify-between">
                <button className="bg-brand text-white px-4 py-2 text-sm rounded hover:bg-brand/90 transition">
                  Explore Places
                </button>
                <span className="text-sm text-black bg-white px-3 py-1 rounded">
                  On Request
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Centered button */}
      <div className="flex justify-center">
        <button className="bg-brand hover:bg-brand/90 text-white text-sm font-medium px-6 py-3 rounded-full transition">
          View More Packages
        </button>
      </div>
    </section>
  );
};

export default SafariSection;