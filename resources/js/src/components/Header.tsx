import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      submenu: [
        { name: 'Executive Leadership Coaching', path: '/services/leadership' },
        { name: 'Team Leadership Coaching', path: '/services/team' },
        { name: 'Comprehensive Business Training & Consulting', path: '/services/business-training' },
        { name: 'Leadership and Culture Development Program', path: '/services/culture-development' },
      ]
    },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact', path: '/contact' },
    { name: 'News and Insights', path: '/news'}
  ];

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  return (
    <header className="bg-white shadow-md py-3" ref={dropdownRef}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/images/logo-throne.png"
            alt="Throne Solutions Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <div 
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={toggleServicesDropdown}
                  >
                    <span className={`font-medium hover:text-brand transition-colors ${
                      isActive(link.path) || location.pathname.startsWith('/services/') 
                        ? 'text-brand' 
                        : 'text-gray-800'
                    }`}>
                      {link.name}
                    </span>
                    {servicesDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    
                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-brand"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-medium hover:text-brand transition-colors ${
                      isActive(link.path) ? 'text-brand' : 'text-gray-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Book a Session Button - Desktop */}
          <Link to="/book">
            <button className="px-6 py-3 border-2 border-[#FFD166] text-black font-bold rounded hover:bg-[#FFD166] transition-all duration-300 transform hover:-translate-y-1">
              Book a Session
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 hover:text-brand transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100">
                {link.submenu ? (
                  <div className="flex flex-col">
                    <div 
                      className="flex justify-between items-center py-3 cursor-pointer"
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    >
                      <span className={`font-medium ${
                        isActive(link.path) || location.pathname.startsWith('/services/') 
                          ? 'text-brand' 
                          : 'text-gray-800'
                      }`}>
                        {link.name}
                      </span>
                      {servicesDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                    
                    {/* Mobile Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="pl-4 flex flex-col">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="py-2 font-medium text-gray-600 hover:text-brand"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`block py-3 font-medium ${
                      isActive(link.path) ? 'text-brand' : 'text-gray-800'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Book a Session Button - Mobile */}
            <div className="mt-4">
              <Link to="/book">
                <button className="w-full px-6 py-3 border-2 border-[#FFD166] text-black font-bold rounded hover:bg-[#FFD166] transition-all duration-300">
                  Book a Session
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;