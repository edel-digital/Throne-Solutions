import React from 'react';

const Mission = () => {
  return (
    <div className="bg-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Welcome Section */}
      <section className="text-center py-10 md:py-16 px-4 flex flex-col justify-center">
        <h4 className="text-lg md:text-sm text-black uppercase tracking-wide mb-3 md:mb-2 text-brand">
          WELCOME TO
        </h4>
        
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-4">
          THRONE SOLUTIONS
        </h1>
        
        <p className="text-2xl md:text-lg max-w-2xl mx-auto leading-relaxed md:leading-normal">
          <strong>Throne Solutions Ltd</strong> is a dynamic consulting company specializing in <strong>leadership and business development</strong>. 
          With a history spanning six years, we have established ourselves as <strong>trusted advisors and partners</strong> to numerous 
          organizations seeking to unlock their full potential. Based in Nairobi, the <strong>thriving business hub of East Africa,</strong> 
          we are strategically positioned to cater to the growing needs of this vibrant and expanding population. Our deep-rooted 
          understanding of the local landscape, coupled with our extensive expertise, allows us to navigate the complexities of the regional market with ease.
        </p>
      </section>
    </div>
  );
};

export default Mission;