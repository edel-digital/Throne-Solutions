import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Target, BarChart, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Executive Leadership Coaching",
      description: "Executive Leadership Coaching at Throne Solutions is a transformative journey that empowers leaders to unlock their full potential, gain profound self-awareness, and develop the skills and strategies necessary to excel in their roles. Through personalized guidance and proven coaching methods, we foster leadership growth, drive meaningful change, and enable our clients to achieve remarkable success.",
      icon: <User className="text-white" size={24} />, // Increased icon size
      link: '/services/leadership',
      bgColor: "bg-blue-600"
    },
    {
      title: "Team Leadership Coaching",
      description: "Executive Leadership Coaching at Throne Solutions is a transformative journey that empowers leaders to unlock their full potential, gain profound self-awareness, and develop the skills and strategies necessary to excel in their roles. Through personalized guidance and proven coaching methods, we foster leadership growth, drive meaningful change, and enable our clients to achieve remarkable success.",
      icon: <Target className="text-white" size={24} />, // Increased icon size
      link: '/services/team',
      bgColor: "bg-emerald-600"
    },
    {
      title: "Comprehensive Business Training & Consulting",
      description: "Our tailored approach to business training and consulting covers all aspects of your organization. From foundational knowledge to strategic coaching and innovative value proposition modeling, we guide entrepreneurs and businesses towards growth and excellence. Gain confidence, clarity, and utilize our expert consultants and valuable connections to make informed decisions that reduce risk and propel your business forward",
      icon: <BarChart className="text-white" size={24} />, // Increased icon size
      link: '/services/business-training',
      bgColor: "bg-amber-600"
    },
    {
      title: "Leadership and Culture Development Program",
      description: "Transform your organization's performance by focusing on effective leadership and cultivating a positive and strengths- based culture. Through our proven tools and training, we assess team engagement, empower leaders with impactful methodologies, and align goals with company objectives. Create a collaborative environment that retains top talent, enhances productivity, and positively impacts your bottom line.",
      icon: <Users className="text-white" size={24} />, // Increased icon size
      link: '/services/culture-development',
      bgColor: "bg-violet-600"
    }
  ];

  return (
    <>
      <section id="services" className="py-12 md:py-20 px-4 bg-gradient-to-br from-[#F8F9FC] to-[#EFF1F8]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h4 className="text-base md:text-sm uppercase tracking-wide mb-3 md:mb-2 text-brand">OUR BEST SERVICES</h4>
            <h1 className="text-3xl min-[400px]:text-[38px] md:text-5xl text-gray-800 mb-4 leading-tight">
              Elevate your Business with our Transformational Solutions!!
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-5 md:mt-6 rounded-full"></div>
          </div>

          {/* Improved responsive grid */}
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-5 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group border border-gray-100"
              >
                <div className="p-5 md:p-8">
                  <div className="flex items-start">
                    <div className={`${service.bgColor} p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl min-[500px]:text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-brand transition-colors">
                        {service.title}
                      </h3>

                      {/* Fixed font size for better readability */}
                      <p className="text-base text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Learn More Link with Arrow */}
                <div className="flex justify-end pr-5 md:pr-8 pb-5">
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-brand font-medium hover:underline group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{ backgroundColor: '#30344D', fontFamily: 'Montserrat, sans-serif' }} className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            The next level of leadership and business excellence is within reach
          </h2>

          <Link to="/book">
            <button className="mt-6 px-5 py-2.5 md:px-8 md:py-3.5 bg-transparent border-2 border-[#FFD166] text-brand font-bold rounded-full hover:bg-[#FFD166] transition-all w-full sm:w-auto text-base">
              Book A Session
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;