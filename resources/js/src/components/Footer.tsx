import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* About */}
          <div className="text-center sm:text-left">
            <div className="mb-4 flex justify-center sm:justify-start">
              <span
                className="text-2xl sm:text-2xl md:text-2xl font-bold text-white px-2 py-1 rounded"
                style={{ backgroundColor: '#BC832B' }}
              >
                Throne
              </span>
              <span className="ml-1 text-2xl sm:text-2xl md:text-2xl font-bold text-white">Solutions</span>
            </div>
            <p className="mb-4 text-gray-300 text-base sm:text-base md:text-base">
              Throne Solutions Ltd is a dynamic consulting company specializing in leadership and business development.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a
                href="https://www.facebook.com/people/Coach-Robert-Wamwea-Throne-Solutions/61553131059795/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-orange-600 p-2 rounded-full transition-colors"
                style={{ backgroundColor: '#BC832B' }}
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/p/DLPpI8joT2a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-orange-600 p-2 rounded-full transition-colors"
                style={{ backgroundColor: '#BC832B' }}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://ke.linkedin.com/in/robert-wamwea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-orange-600 p-2 rounded-full transition-colors"
                style={{ backgroundColor: '#BC832B' }}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4 text-[#BC832B] text-lg sm:text-base md:text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-[#BC832B] text-base sm:text-base">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-[#BC832B] text-base sm:text-base">Our Programs</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#BC832B] text-base sm:text-base">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#BC832B] text-base sm:text-base">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4 text-[#BC832B] text-lg sm:text-base md:text-base">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start">
                <MapPin size={20} className="mr-2 text-[#BC832B] mb-1 sm:mb-0" />
                <span className="text-gray-300 text-base sm:text-base">Watermark Business, Karen Nairobi</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Phone size={20} className="mr-2 text-[#BC832B]" />
                <span className="text-gray-300 text-base sm:text-base">+254 703 567 082</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Mail size={20} className="mr-2 text-[#BC832B]" />
                <span className="text-gray-300 text-base sm:text-base">robertwamweacoaching@gmail.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Mail size={20} className="mr-2 text-[#BC832B]" />
                <span className="text-gray-300 text-base sm:text-base">office@thronesolutions.co.ke</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4 text-[#BC832B] text-lg sm:text-base md:text-base">Subscribe to our Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-4 max-w-xs mx-auto sm:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 sm:py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
              />
              <button
                type="submit"
                className="w-full bg-gray-500 hover:bg-orange-600 text-white font-semibold py-3 sm:py-2 rounded transition-all text-base"
              >
                Subscribe
              </button>
              {subscribed && (
                <p className="text-green-400 text-base sm:text-sm">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-base sm:text-sm">
            &copy; {new Date().getFullYear()} Throne Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;