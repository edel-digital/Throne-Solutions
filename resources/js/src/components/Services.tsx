import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Target, BarChart, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Executive Leadership Coaching",
      description: "Executive Leadership Coaching at Throne Solutions is a transformative journey that empowers leaders to unlock their full potential, gain profound self-awareness, and develop the skills and strategies necessary to excel in their roles. Through personalized guidance and proven coaching methods, we foster leadership growth, drive meaningful change, and enable our clients to achieve remarkable success.",
      icon: <User className="text-white" size={20} />,
      link: '/services/leadership',
      bgColor: "bg-blue-600"
    },
    {
      title: "Team Leadership Coaching",
      description: "Executive Leadership Coaching at Throne Solutions is a transformative journey that empowers leaders to unlock their full potential, gain profound self-awareness, and develop the skills and strategies necessary to excel in their roles. Through personalized guidance and proven coaching methods, we foster leadership growth, drive meaningful change, and enable our clients to achieve remarkable success.",
      icon: <Target className="text-white" size={20} />,
      link: '/services/team',
      bgColor: "bg-emerald-600"
    },
    {
      title: "Comprehensive Business Training & Consulting",
      description: "Our tailored approach to business training and consulting covers all aspects of your organization. From foundational knowledge to strategic coaching and innovative value proposition modeling, we guide entrepreneurs and businesses towards growth and excellence. Gain confidence, clarity, and utilize our expert consultants and valuable connections to make informed decisions that reduce risk and propel your business forward",
      icon: <BarChart className="text-white" size={20} />,
      link: '/services/business-training',
      bgColor: "bg-amber-600"
    },
    {
      title: "Leadership and Culture Development Program",
      description: "Transform your organization's performance by focusing on effective leadership and cultivating a positive and strengths- based culture. Through our proven tools and training, we assess team engagement, empower leaders with impactful methodologies, and align goals with company objectives. Create a collaborative environment that retains top talent, enhances productivity, and positively impacts your bottom line.",
      icon: <Users className="text-white" size={20} />,
      link: '/services/culture-development',
      bgColor: "bg-violet-600"
    }
  ];

  return (
    <>
      <section id="services" className="py-16 md:py-20 px-4 bg-gradient-to-br from-[#F8F9FC] to-[#EFF1F8]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h4 className="text-base md:text-sm uppercase tracking-wide mb-3 md:mb-2 text-brand">OUR BEST SERVICES</h4>
            <h1 className="text-4xl min-[400px]:text-[42px] md:text-5xl text-gray-800 mb-4 leading-tight">
              Elevate your Business with our Transformational Solutions!!
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-5 md:mt-6 rounded-full"></div>
          </div>

          {/* Responsive grid - 2 columns on mobile, 2 on tablet, 2 on desktop */}
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg md:shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-xl md:hover:shadow-2xl group border border-gray-100"
              >
                <div className="p-5 sm:p-6 md:p-8">
                  <div className="flex items-start">
                    <div className={`${service.bgColor} p-3 md:p-4 rounded-xl mr-4 md:mr-6 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>

                    <div className="flex-1">
                      {/* Increased font size for mobile */}
                      <h3 className="text-2xl min-[500px]:text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-brand transition-colors">
                        {service.title}
                      </h3>

                      {/* Increased font size for mobile */}
                      <p className="text-base min-[500px]:text-sm md:text-base text-gray-600 mb-5 md:mb-6 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Learn More Link with Arrow */}
                <div className="flex justify-end pr-5 sm:pr-6 md:pr-8 pb-5 md:pb-6">
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
      <section style={{ backgroundColor: '#30344D', fontFamily: 'Montserrat, sans-serif' }} className="py-14 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl min-[400px]:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            The next level of leadership and business excellence is within reach
          </h2>

          <Link to="/book">
            <button className="mt-8 md:mt-10 px-6 py-3 md:px-8 md:py-3.5 bg-transparent border-2 border-[#FFD166] text-brand font-bold rounded-full hover:bg-[#FFD166] hover:text-brand transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-base">
              Book A Session
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;