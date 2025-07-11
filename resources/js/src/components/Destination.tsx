import React from 'react';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Amboseli National Park",
      country: "Kenya",
      description: "Famous for its large elephant herds and stunning views of Mount Kilimanjaro across the border in Tanzania.",
      price: 1650,
      image: "/images/amboseli.jpg",
    },
    {
      id: 2,
      name: "Arusha National Park",
      country: "Tanzania",
      description: "Diverse landscapes including Mount Meru, Ngurdoto Crater, and Momella Lakes with flamingos.",
      price: 1450,
      image: "/images/arusha.jpg",
    },
    {
      id: 3,
      name: "Diani Beach",
      country: "Kenya",
      description: "Pristine white sandy beaches and turquoise waters perfect for relaxation and water sports.",
      price: 1250,
      image: "/images/diani.jpg"
    },
    {
      id: 4,
      name: "Lake Manyara National Park",
      country: "Tanzania",
      description: "Known for tree-climbing lions, large elephant herds, and diverse birdlife around the alkaline lake.",
      price: 1550,
      image: "/images/mayara.jpg"
    },
    {
      id: 5,
      name: "Lake Nakuru National Park",
      country: "Kenya",
      description: "Famous for its huge flocks of pink flamingos and endangered rhino sanctuary.",
      price: 1450,
      image: "/images/lake-nakuru.jpg"
    },
    {
      id: 6,
      name: "Maasai Mara National Game Reserve",
      country: "Kenya",
      description: "Iconic savannah landscape hosting the Great Migration and abundant big cats.",
      price: 1950,
      image: "/images/mara-maasai-park.jpg"
    },
    {
      id: 7,
      name: "Mikumi National Park",
      country: "Tanzania",
      description: "Tanzania's fourth-largest park with vast grasslands teeming with wildlife.",
      price: 1350,
      image: "/images/mikumi.jpg"
    },
    {
      id: 8,
      name: "Mombasa Beach",
      country: "Kenya",
      description: "Historic coastal city with beautiful beaches, coral reefs, and Swahili culture.",
      price: 1150,
      image: "/images/mombasa.jpg"
    },
    {
      id: 9,
      name: "Nairobi National Park",
      country: "Kenya",
      description: "Unique wildlife sanctuary just outside the capital city with skyline views.",
      price: 950,
      image: "/images/nairobi.jpg"
    },
    {
      id: 10,
      name: "Ngorongoro Conservation Park",
      country: "Tanzania",
      description: "Massive volcanic caldera sheltering diverse wildlife in a natural enclosure.",
      price: 2150,
      image: "/images/ngorongoro.jpg"
    },
    {
      id: 11,
      name: "Ruaha National Park",
      country: "Tanzania",
      description: "Tanzania's largest national park with rugged wilderness and excellent predator sightings.",
      price: 1850,
      image: "/images/ruaha.jpg"
    },
    {
      id: 12,
      name: "Samburu Game Reserve",
      country: "Kenya",
      description: "Home to unique northern species like Grevy's zebra and reticulated giraffe.",
      price: 1550,
      image: "/images/samburu.jpg"
    },
    {
      id: 13,
      name: "Serengeti National Park",
      country: "Tanzania",
      description: "Vast plains hosting the Great Migration and Africa's highest concentration of predators.",
      price: 2250,
      image: "/images/serengeti.jpg"
    },
    {
      id: 14,
      name: "Tarangire National Park",
      country: "Tanzania",
      description: "Famous for its massive baobab trees and large elephant herds during dry season.",
      price: 1750,
      image: "/images/Tarangire.jpg"
    },
    {
      id: 15,
      name: "Tsavo East National Park",
      country: "Kenya",
      description: "Massive park known for its red elephants and the Yatta Plateau, the world's longest lava flow.",
      price: 1550,
      image: "/images/Tsavo-East.jpg"
    },
    {
      id: 16,
      name: "Zanzibar",
      country: "Tanzania",
      description: "Tropical archipelago with historic Stone Town, spice farms, and idyllic beaches.",
      price: 1350,
      image: "/images/Zanzibar.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h4 className="text-sm text-brand uppercase tracking-widest mb-2">Discover Africa</h4>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Safari Destinations</h1>
          <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of Africa's most breathtaking destinations. Each offers unique experiences and unforgettable adventures.
          </p>
        </div>
        
        {/* Filter Section */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          <button className="px-5 py-2 bg-brand text-white rounded-full text-sm font-medium hover:bg-brand-dark transition shadow-md">
            All Destinations
          </button>
          <button className="px-5 py-2 bg-white text-gray-700 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition">
            Kenya Parks
          </button>
          <button className="px-5 py-2 bg-white text-gray-700 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition">
            Tanzania Parks
          </button>
          <button className="px-5 py-2 bg-white text-gray-700 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition">
            Beach Destinations
          </button>
          <button className="px-5 py-2 bg-white text-gray-700 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition">
            Luxury Experiences
          </button>
        </div>
        
        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                  <p className="text-brand-light text-sm">{destination.country}</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">Starting from</p>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-gray-800">${destination.price}</span>
                      <span className="text-gray-500 text-sm ml-1">/person</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-500 text-sm">4.8</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 h-20 overflow-hidden">
                  {destination.description}
                </p>
                
                <button className="w-full bg-brand text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-brand-dark transition flex items-center justify-center">
                  View Package Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="w-10 h-10 flex items-center justify-center text-gray-500 rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-brand text-white rounded-full">1</button>
            <button className="w-10 h-10 flex items-center justify-center text-gray-700 rounded-full hover:bg-gray-100">2</button>
            <button className="w-10 h-10 flex items-center justify-center text-gray-700 rounded-full hover:bg-gray-100">3</button>
            <button className="w-10 h-10 flex items-center justify-center text-gray-700 rounded-full hover:bg-gray-100">4</button>
            <button className="w-10 h-10 flex items-center justify-center text-gray-500 rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </nav>
        </div>
        
        
        
        {/* <div className="mt-20 bg-gradient-to-r from-brand to-brand-dark rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mt-32 -mr-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -mb-24 -ml-24"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for Your African Adventure?</h2>
            <p className="max-w-2xl mx-auto mb-6 text-brand-light">
              Our safari experts are ready to help you plan the perfect itinerary for your dream vacation.
            </p>
            <button className="bg-white text-brand px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
              Contact Our Safari Experts
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Destinations;