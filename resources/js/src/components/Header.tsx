import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [openThirdDropdown, setOpenThirdDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
        setOpenThirdDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
    setOpenSubDropdown(null);
    setOpenThirdDropdown(null);
  };

  const toggleSubDropdown = (name: string) => {
    setOpenSubDropdown(openSubDropdown === name ? null : name);
    setOpenThirdDropdown(null);
  };

  const toggleThirdDropdown = (name: string) => {
    setOpenThirdDropdown(openThirdDropdown === name ? null : name);
  };

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsOpen(false);
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
                <Link
                  to={link.path}
                  className={`font-medium hover:text-brand transition-colors ${
                    isActive(link.path) ? 'text-brand' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Book a Session Button - Desktop */}
          <Link to="/book">
  <button className="px-6 py-3 border-2 background-color: text-brand text-black rounded hover:text-brand transition-all duration-300 transform hover:-translate-y-1">
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
              <Link
                key={link.name}
                to={link.path}
                className={`block py-3 font-medium ${
                  isActive(link.path) ? 'text-brand' : 'text-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Book a Session Button - Mobile */}
            <div className="mt-4">
              <Link to="/book">
  <button className="px-6 py-3 border-2 border-[#FFD166] text-black font-bold rounded hover:text-brand transition-all duration-300 transform hover:-translate-y-1">
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
