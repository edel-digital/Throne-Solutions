import React from 'react';
// import Header from './Header';
import Hero from './Hero';
import FeaturedDestinations from './FeaturedDestinations';
import About from './About';
// import Services from './Services';
import CoastSection from './CoastSection';
import TravelGuide from './TravelGuide';
import Tailor from './Tailor';
import Testimonials from './testimonials';
import Footer from './Footer';
import Email from './Email';
import Services from './Services';
import Mission from './FeaturedDestinations';
// import PromiseSection from './Promise';
// import TeamSection from './Team';
import Partners from './Partners';
import ProgramsPage from './ProgramsHome';
// import AboutUs from './AboutUsPage';

function App() {
  return (
    <div className="font-sans">
      {/* <Header /> */}
      <Hero />
      <Mission />
       <Services />
       <ProgramsPage />
       {/* <PromiseSection /> */}
       {/* <TeamSection /> */}
       
      {/* <About />
      <CoastSection />
      <TravelGuide />
      <Tailor/> */}
      <Testimonials/>
      <Partners />
      {/* <Email/> */}
      <Footer />
      {/* <AboutUs /> */}
    </div>
  );
}

export default App;