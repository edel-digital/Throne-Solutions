import React from 'react';

const TravelGuide = () => {
  const travelGuide = [
    {
      title: "Kenya Safari Coast",
      image: "/images/kenya-1.jpg",
      description: "Relax on pristine beaches after thrilling safaris inland."
    },
    {
      title: "Kenya Safari FAQs",
      image: "/images/kenya-2.jpg",
      description: "Everything you need to know before booking your trip."
    },
    {
      title: "Kenya Safari Foods",
      image: "/images/kenya-3.jpg",
      description: "Sample unique Kenyan dishes from various regions."
    },
  ];

  return (
    <section
      className="min-h-screen w-full px-6 py-16 text-white"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto text-left mb-12">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide mb-2 text-center">KENYA</h4>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">TRAVEL GUIDE</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-center">
          Kenya is a diverse country in East Africa known for its stunning landscapes, wildlife, and cultural heritage, offering attractions such as Maasai Mara, Mount Kenya, and the beautiful Mombasa beach.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {travelGuide.map((pkg, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center h-72 rounded-lg overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${pkg.image})` }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0  bg-opacity-40"></div>

            {/* Bottom content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-4">
              <div className="bg-opacity-50 p-4 rounded">
                <h4 className="text-lg font-semibold mb-1">{pkg.title}</h4>
                <p className="text-sm text-gray-200">{pkg.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center">
        <button className="bg-brand hover:bg-brand/90 text-white text-sm font-medium px-6 py-3 rounded-full transition">
  View Travel Guide
</button>
      </div>
    </section>
  );
};

export default TravelGuide;
