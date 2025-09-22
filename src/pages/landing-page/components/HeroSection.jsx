import React, { useState, useEffect, forwardRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = forwardRef(({ onJoinAsCreator, onJoinAsBrand, visitorType, onVisitorTypeChange }, ref) => {
  const [currentCount, setCurrentCount] = useState(2847);

  useEffect(() => {
    // Simulate real-time counter updates
    const interval = setInterval(() => {
      setCurrentCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const creatorHeadline = "Get Paid to Create. Build Your Dream Brand Collabs.";
  const brandHeadline = "Find the Creators Who Make Your Brand Unstoppable";
  
  const creatorSubtext = "Turn your creativity into income. UGCBox helps you land paid gigs, build your portfolio, and work with brands that align with your style.";
  const brandSubtext = "From authentic TikToks to scroll-stopping Reels – UGCBox connects you with vetted creators who know how to drive sales, not just likes.";

  return (
    <section ref={ref} className="relative min-h-auto md:min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden pt-10 md:pt-0 pb-1">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-10 pb-8 md:pt-20 md:pb-">
        {/* Visitor Type Toggle - At the very top */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white rounded-full p-1 shadow-lg border">
            <button
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                visitorType === 'creator' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => onVisitorTypeChange && onVisitorTypeChange('creator')}
            >
              I'm a Creator
            </button>
            <button
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                visitorType === 'brand' 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => onVisitorTypeChange && onVisitorTypeChange('brand')}
            >
              I'm a Brand
            </button>
          </div>
        </motion.div>

        <div className="text-center max-w-6xl mx-auto">

          {/* Dynamic Headlines */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {visitorType === 'creator' ? creatorHeadline : brandHeadline}
              </span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {visitorType === 'creator' ? creatorSubtext : brandSubtext}
            </p>
          </motion.div>

          {/* Dynamic CTA */}
          <motion.div
            className="flex justify-center items-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {visitorType === 'creator' ? (
              <Button
                variant="default"
                size="xl"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={onJoinAsCreator}
                iconName="Users"
                iconPosition="left"
              >
                Join as a Creator →
              </Button>
            ) : (
              <Button
                variant="default"
                size="xl"
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={onJoinAsBrand}
                iconName="Building2"
                iconPosition="left"
              >
                Start Hiring Creators →
              </Button>
            )}
          </motion.div>


        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;