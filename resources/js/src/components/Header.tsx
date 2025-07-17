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
        { name: 'Executive Leadership', path: '/services/leadership' },
        { name: 'Team Leadership', path: '/services/team' },
        { name: 'Business Training', path: '/services/business-training' },
        { name: 'Culture Development', path: '/services/culture-development' },
      ]
    },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact', path: '/contact' },
    { name: 'News', path: '/news'}
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
    <header className="bg-white shadow-md py-3 sticky top-0 z-50" ref={dropdownRef}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/images/logo-throne.png"
            alt="Throne Solutions Logo"
            className="h-12 sm:h-16 w-auto" // Responsive logo size
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <div 
                    className="flex items-center gap-1 cursor-pointer py-2"
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
                      <div className="absolute left-0 top-full mt-1 w-56 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-100">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-brand text-sm"
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
                    className={`font-medium hover:text-brand transition-colors py-2 ${
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
          <Link to="/book" className="ml-2">
            <button className="px-4 py-2.5 sm:px-5 sm:py-3 border-2 border-[#FFD166] text-black font-bold rounded hover:bg-[#FFD166] transition-all duration-300 text-sm sm:text-base">
              Book a Session
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 hover:text-brand transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50">
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
                      <div className="pl-4 flex flex-col pb-2">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="py-3 font-medium text-gray-600 hover:text-brand border-b border-gray-100 last:border-0"
                            onClick={() => {
                              setIsOpen(false);
                              setServicesDropdownOpen(false);
                            }}
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
            <div className="mt-4 pt-2">
              <Link to="/book" onClick={() => setIsOpen(false)}>
                <button className="w-full px-6 py-3 border-2 border-[#FFD166] text-black font-bold rounded hover:bg-[#FFD166] transition-all duration-300 text-base">
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