import React from 'react';
import { useState } from 'react';

const Partners = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const partners = [
  { id: 1, name: 'Partner 1', logo: 'partner-1' },
  { id: 2, name: 'Partner 2', logo: 'partner-2' },
  { id: 3, name: 'Partner 3', logo: 'partner-3' },
];

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with email:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="font-montserrat">
      {/* Partners Section */}
      <section className="py-16 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#30344D] mb-4">
              Our Esteemed Clients
            </h2>
            <div className="w-24 h-1 bg-[#FFD166] mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud to collaborate with industry leaders who share our vision for excellence and innovation.
            </p>
          </div>
          
          {/* Scrolling Partners Container - Modified */}
          <div className="relative overflow-hidden py-6">
            {/* Scrolling logos without cards */}
            <div className="flex animate-scroll items-center">
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`} 
                  className="flex-shrink-0 mx-12 flex items-center justify-center"
                >
                  <img 
  src={`/images/partners/${partner.logo}.webp`} 
  alt={partner.name} 
  className="w-40 h-20 object-contain"
/>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Partners;