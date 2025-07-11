import React from 'react';
import { Globe, PartyPopper, BadgeDollarSign, ThumbsUp, Footprints, Umbrella } from 'lucide-react';

const CoastSection = () => {
  const features = [
    {
      title: 'Diverse Destinations',
      description: 'Whether You are intrested in Trekking, Safari or a beach holiday you will be able to find the idel holiday.',
      icon: <Globe className="w-6 h-6 text-brand" />,
    },
    {
      title: 'Holiday speciality',
      description: 'We are not just focused on getting you away from the strains of everyday life but on making a positive improvement.',
      icon: <PartyPopper className="w-6 h-6 text-brand" />,
    },
    {
      title: 'Best Prices Guarantee',
      description: 'We aim at giving you the best safari and Trekking experience at a price that wont break your budget.',
      icon: <BadgeDollarSign className="w-6 h-6 text-brand" />,
    },
    {
      title: 'Service Excellence',
      description: 'We are highly committed to customer service excellence from the very first point of enquiry .',
      icon: <ThumbsUp className="w-6 h-6 text-brand" />,
    },
    {
      title: 'First-Hand Experience',
      description: 'Our team has travelled extensively to all of our regions and brings a wealth of in-depth knowledge.',
      icon: <Footprints className="w-6 h-6 text-brand" />,
    },
    {
      title: 'Tailor Made Tour',
      description: 'We also offer a tailor made holiday service for those who want something a little bit different or special',
      icon: <Umbrella className="w-6 h-6 text-brand" />,
    },
  ];

  return (
    <section
      className="w-full px-6 py-16 text-gray-800 antialiased"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto text-left mb-12">
        <h4 className="text-sm text-gray-500 uppercase tracking-wide mb-2">Why Choose Us?</h4>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Because we are the best</h1>
      </div>

      {/* Grid with 3 per row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-start bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex items-center mb-3">
              {feature.icon}
              <h3 className="text-lg font-semibold ml-2">{feature.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoastSection;