import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header'; // ✅ Import Header component
import AboutUs from './components/AboutUsPage';
import Destinations from './components/Destination';
import ServicePage from './components/Services1';
import ContactUs from './components/Contact';
import ServicesSection from './components/Empowered';
import ProgramsPage from './components/Programs';
import Book from './components/Book';


const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Throne solutions';
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />}/>
            <Route path="/services" element={<ServicePage />}/>
            <Route path="/contact" element={<ContactUs />} />
            <Route path='/empower'element={<ServicesSection />}/>
            <Route path='/programs'element={<ProgramsPage />}/>
            <Route path="/book" element={<Book />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
