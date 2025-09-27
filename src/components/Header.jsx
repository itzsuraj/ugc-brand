import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Icon from './AppIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [creatorCount, setCreatorCount] = useState(2847);

  useEffect(() => {
    // Simulate real-time counter updates
    const interval = setInterval(() => {
      setCreatorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <img 
                src="/assets/images/file.png" 
                alt="Logo" 
                className="h-16 w-auto"
              />
              
              {/* Brand Name */}
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Floovio
                </h1>
                <p className="text-xs -mt-1">
                  <span className="text-purple-600">Connecting Brands with</span>
                  <span className="text-blue-600"> Creators</span>
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              FAQ
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-purple-600 transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 border-t border-gray-200">
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium py-2"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium py-2"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium py-2"
            >
              Testimonials
            </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="block w-full text-left text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium py-2"
                >
                  FAQ
                </button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
