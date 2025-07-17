import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import FeaturedDestinations from './FeaturedDestinations';
import Services from './Services';
import ProgramsPage from './ProgramsHome';
import Testimonials from './testimonials';
import Partners from './Partners';
import Footer from './Footer';
import Popup from './Popup'; // Import the Popup component

function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup on initial load
  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div className="font-sans">
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      <Hero />
      <FeaturedDestinations />
      <Services />
      <ProgramsPage />
      <Testimonials/>
      <Partners />
      <Footer />
    </div>
  );
}

export default HomePage;