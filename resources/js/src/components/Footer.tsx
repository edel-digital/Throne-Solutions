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
        {/* Improved grid layout */}
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* About */}
          <div className="text-center min-[500px]:text-left">
            <div className="mb-4 flex justify-center min-[500px]:justify-start">
              <span
                className="text-xl sm:text-2xl font-bold text-white px-2 py-1 rounded"
                style={{ backgroundColor: '#BC832B' }}
              >
                Throne
              </span>
              <span className="ml-1 text-xl sm:text-2xl font-bold text-white">Solutions</span>
            </div>
            <p className="mb-4 text-gray-300 text-sm sm:text-base">
              Throne Solutions Ltd is a dynamic consulting company specializing in leadership and business development.
            </p>
            <div className="flex justify-center min-[500px]:justify-start space-x-3">
              <a
                href="https://www.facebook.com/people/Coach-Robert-Wamwea-Throne-Solutions/61553131059795/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-orange-600 p-2 rounded-full transition-colors"
                style={{ backgroundColor: '#BC832B' }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/p/DLPpI8joT2a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-orange-600 p-2 rounded-full transition-colors"
                style={{ backgroundColor: '#BC832B' }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://ke.linkedin.com/in/robert-wamwea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-orange-600 p-2 rounded-full transition-colors"
                style={{ backgroundColor: '#BC832B' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center min-[500px]:text-left">
            <h3 className="font-bold mb-4 text-[#BC832B] text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-[#BC832B] text-sm sm:text-base">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-[#BC832B] text-sm sm:text-base">Our Programs</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#BC832B] text-sm sm:text-base">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#BC832B] text-sm sm:text-base">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center min-[500px]:text-left">
            <h3 className="font-bold mb-4 text-[#BC832B] text-base sm:text-lg">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex flex-col min-[500px]:flex-row min-[500px]:items-start justify-center min-[500px]:justify-start">
                <MapPin size={18} className="mr-2 text-[#BC832B] mb-1 min-[500px]:mb-0 mx-auto min-[500px]:mx-0" />
                <span className="text-gray-300 text-sm sm:text-base break-words mt-1 min-[500px]:mt-0">
                  Watermark Business, Karen Nairobi
                </span>
              </li>
              <li className="flex items-center justify-center min-[500px]:justify-start">
                <Phone size={18} className="mr-2 text-[#BC832B]" />
                <span className="text-gray-300 text-sm sm:text-base">+254 703 567 082</span>
              </li>
              <li className="flex items-center justify-center min-[500px]:justify-start">
                <Mail size={18} className="mr-2 text-[#BC832B]" />
                <span className="text-gray-300 text-sm sm:text-base break-words">
                  robertwamweacoaching@gmail.com
                </span>
              </li>
              <li className="flex items-center justify-center min-[500px]:justify-start">
                <Mail size={18} className="mr-2 text-[#BC832B]" />
                <span className="text-gray-300 text-sm sm:text-base break-words">
                  office@thronesolutions.co.ke
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center min-[500px]:text-left">
            <h3 className="font-bold mb-4 text-[#BC832B] text-base sm:text-lg">Subscribe to our Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-3 max-w-xs mx-auto min-[500px]:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="w-full bg-[#BC832B] hover:bg-orange-600 text-white font-semibold py-2.5 rounded transition-all text-sm sm:text-base"
              >
                Subscribe
              </button>
              {subscribed && (
                <p className="text-green-400 text-sm sm:text-base">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Throne Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;