import React from 'react';

const LeftAlignedPromiseSection = () => {
  return (
    <section 
      className="py-16 px-4 md:px-8"
      style={{ 
        fontFamily: 'Montserrat, sans-serif',
        backgroundColor: '#30344D'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <div className="mb-8">
              <p className="text-[#FFD166] font-bold tracking-[0.2em] uppercase text-xs mb-3">
                MY PROMISE TO YOU
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 relative pb-4">
                Our Pledge
                <div className="absolute bottom-0 left-0 w-20 h-1.5 bg-[#FFD166] rounded-full"></div>
              </h2>
            </div>
            
            <ul className="space-y-5">
              {[
                { 
                  title: "Tailored Support", 
                  description: "Personalized coaching tailored to your unique needs, goals, and challenges." 
                },
                { 
                  title: "Confidentiality", 
                  description: "Strict confidentiality and highest standards of professionalism." 
                },
                { 
                  title: "Accountability", 
                  description: "Hold you accountable with support and encouragement." 
                },
                { 
                  title: "Honest Feedback", 
                  description: "Constructive feedback to help you improve and grow." 
                },
                { 
                  title: "Empowerment", 
                  description: "Knowledge and tools to overcome obstacles and thrive." 
                },
                { 
                  title: "Continuous Learning", 
                  description: "Support for ongoing growth and development." 
                }
              ].map((item, index) => (
                <li className="flex items-start" key={index}>
                  <div className="mt-1.5 mr-4 text-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-[#E0E0E0] text-base mt-1.5">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <button className="mt-10 px-8 py-3.5 bg-transparent border-2 border-[#FFD166] text-brand font-bold rounded-full hover:bg-[#FFD166] hover:text-brand transition-all duration-300 transform hover:-translate-y-1 text-base">
              Read more
            </button>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 flex items-center">
            <div className="relative w-full">
              <div className="bg-gradient-to-br from-[#394362] to-[#242a3d] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 p-1">
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                  <img 
                    src="/images/Leadership.png" 
                    // alt="Leadership Coaching" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating content over the image */}
              {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <div className="bg-[#FFD166] p-4 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#30344D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-white font-bold text-2xl mb-2">Leadership Coaching</div>
                <div className="text-[#FFD166] text-lg">Personalized Growth Journey</div>
              </div> */}

              {/* Decorative floating icons */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#FFD166] flex items-center justify-center shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#30344D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-[#5D6BA4] flex items-center justify-center shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftAlignedPromiseSection;
