import React, { useState, useEffect, forwardRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CreatorHeroSection = forwardRef(({ onJoinAsCreator, onJoinAsBrand }, ref) => {
  const [currentCount, setCurrentCount] = useState(2847);

  useEffect(() => {
    // Simulate real-time counter updates
    const interval = setInterval(() => {
      setCurrentCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const headline = "Get Paid On Time, Every Time";
  const subheadline = "The UGC marketplace where creators always get paid on time—and brands always get content on time.";

  return (
    <section ref={ref} className="relative min-h-auto md:min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden pt-20 md:pt-0 pb-10">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-10 pb-8 md:pt-20 md:pb-16">
        {/* Visitor Type Toggle - At the very top */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white rounded-full p-1 shadow-lg border">
            <button
              className="px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
            >
              I'm a Creator
            </button>
            <button
              className="px-6 py-3 rounded-full text-sm font-medium text-gray-600 hover:text-gray-800"
              onClick={() => onJoinAsBrand && onJoinAsBrand()}
            >
              I'm a Brand
            </button>
          </div>
        </motion.div>

        <div className="text-center max-w-6xl mx-auto">
          {/* Headlines */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {headline}
              </span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {subheadline}
            </p>
          </motion.div>

          {/* Dual CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              variant="default"
              size="xl"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={onJoinAsCreator}
              iconName="Users"
              iconPosition="left"
            >
              Join as Creator
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-blue-600 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={onJoinAsBrand}
              iconName="Building2"
              iconPosition="left"
            >
              Join as Brand
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
});

CreatorHeroSection.displayName = 'CreatorHeroSection';

export default CreatorHeroSection;
