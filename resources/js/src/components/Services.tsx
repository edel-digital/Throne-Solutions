// src/components/Services.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Target, BarChart, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Executive Leadership Coaching",
      description: "Executive Leadership Coaching at Throne Solutions is a transformative journey that empowers leaders to unlock their full potential, gain profound self-awareness, and develop the skills and strategies necessary to excel in their roles. Through personalized guidance and proven coaching methods, we foster leadership growth, drive meaningful change, and enable our clients to achieve remarkable success.",
      icon: <User className="text-white" size={20} />,
      bgColor: "bg-blue-600"
    },
    {
      title: "Team Leadership Coaching",
      description: "Executive Leadership Coaching at Throne Solutions is a transformative journey that empowers leaders to unlock their full potential, gain profound self-awareness, and develop the skills and strategies necessary to excel in their roles. Through personalized guidance and proven coaching methods, we foster leadership growth, drive meaningful change, and enable our clients to achieve remarkable success.",
      icon: <Target className="text-white" size={20} />,
      bgColor: "bg-emerald-600"
    },
    {
      title: "Comprehensive Business Training & Consulting",
      description: "Our tailored approach to business training and consulting covers all aspects of your organization. From foundational knowledge to strategic coaching and innovative value proposition modeling, we guide entrepreneurs and businesses towards growth and excellence. Gain confidence, clarity, and utilize our expert consultants and valuable connections to make informed decisions that reduce risk and propel your business forward",
      icon: <BarChart className="text-white" size={20} />,
      bgColor: "bg-amber-600"
    },
    {
      title: "Leadership and Culture Development Program",
      description: "Transform your organization's performance by focusing on effective leadership and cultivating a positive and strengths- based culture. Through our proven tools and training, we assess team engagement, empower leaders with impactful methodologies, and align goals with company objectives. Create a collaborative environment that retains top talent, enhances productivity, and positively impacts your bottom line.",
      icon: <Users className="text-white" size={20} />,
      bgColor: "bg-violet-600"
    }
  ];

  return (
    <>
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-[#F8F9FC] to-[#EFF1F8]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h4 className="text-sm uppercase tracking-wide mb-2 text-brand">OUR BEST SERVICES</h4>
            <h1 className="text-4xl md:text-5xl text-gray-800 mb-4">Elevate your Business with our Transformational Solutions!!</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex items-start">
                    <div className={`${service.bgColor} p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-brand transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{ backgroundColor: '#30344D', fontFamily: 'Montserrat, sans-serif' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The next level of leadership and business excellence is within reach</h2>

<Link to="/book">
  <button className="mt-10 px-8 py-3.5 bg-transparent border-2 border-[#FFD166] text-brand font-bold rounded-full hover:bg-[#FFD166] hover:text-brand transition-all duration-300 transform hover:-translate-y-1 text-base">
    Book A Session
  </button>
</Link>

        </div>
      </section>
    </>
  );
};

export default Services;
