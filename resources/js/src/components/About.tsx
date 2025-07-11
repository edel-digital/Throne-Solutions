import React from 'react';
// import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  const cards = [
    { title: "Explore Our Destinations", image: "/images/lion.jpg" },
    { title: "Nairobi", image: "/images/nairobi.jpg" },
    { title: "Lake Nakuru", image: "/images/nakuru.jpg" },
    { title: "Maasai Mara", image: "/images/maas.jpg" },
    // { title: "Samburu", image: "/images/samburu.jpg" },
  ];

  return (
    <section
      className="min-h-screen w-full px-6 py-16 bg-[#827c38] text-white"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {/* Left Section Content */}
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h4 className="text-sm uppercase tracking-widest mb-2">Popular Destinations</h4>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl">
            We promise it won't get boring!
          </h1>
        </div>

        {/* Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
  {cards.map((card, index) => (
    <div
      key={index}
      className={`relative bg-cover bg-center rounded-lg overflow-hidden
        ${index === 0 ? 'lg:col-span-2 h-80 sm:h-96' : 'lg:col-span-1 h-64'}`}
      style={{ backgroundImage: `url(${card.image})` }}
    >
      <div className="absolute inset-0  bg-opacity-40 flex items-end p-4">
{card.title === "Explore Our Destinations" ? (
  <div>
    <h2 className="text-white text-lg font-semibold">{card.title}</h2>
    <a
      href="/destinations"
      className="text-white text-sm hover:underline flex items-center gap-1 mt-1"
    >
      Explore Places <span className="text-xl">→</span>
    </a>
  </div>
) : (
  <h2 className="text-white text-lg font-semibold">{card.title}</h2>
)}


      </div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default About;