import React, { useState, useEffect, forwardRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = forwardRef(({ onJoinAsCreator, onJoinAsBrand }, ref) => {
  const [visitorType, setVisitorType] = useState('creator');
  const [currentCount, setCurrentCount] = useState(2847);

  useEffect(() => {
    // Simulate real-time counter updates
    const interval = setInterval(() => {
      setCurrentCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const creatorHeadline = "Get Paid On Time, Every Time";
  const brandHeadline = "Get Content Delivered, Guaranteed";

  return (
    <section ref={ref} className="relative min-h-auto md:min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {/* Creator Avatars */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          SC
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-sm"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          MK
        </motion.div>

        {/* Brand Logos */}
        <motion.div
          className="absolute bottom-32 left-16 w-20 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center border"
          animate={{ x: [0, 10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-gray-700 font-bold text-xs">TechCorp</span>
        </motion.div>

        <motion.div
          className="absolute top-60 right-10 w-18 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center border"
          animate={{ x: [0, -8, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <span className="text-gray-700 font-bold text-xs">BrandX</span>
        </motion.div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-10 pb-8 md:pt-20 md:pb-16">
        {/* Live Counter Notification */}
        <motion.div
          className="hidden sm:flex fixed top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg border z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">{currentCount?.toLocaleString()} creators joined</span>
          </div>
        </motion.div>

        <div className="text-center max-w-6xl mx-auto">
          {/* Dynamic Headlines */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {visitorType === 'creator' ? creatorHeadline : brandHeadline}
              </span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The only UGC marketplace that guarantees on-time content delivery for brands while ensuring fair, prompt payment for creators
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

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-green-500" />
              <span className="text-sm font-medium">Payment Protected</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} className="text-blue-500" />
              <span className="text-sm font-medium">3-Day Avg Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={20} className="text-yellow-500" />
              <span className="text-sm font-medium">99% Success Rate</span>
            </div>
          </motion.div>

          {/* Visitor Type Toggle */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="bg-white rounded-full p-1 shadow-lg border">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  visitorType === 'creator' ?'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md' :'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setVisitorType('creator')}
              >
                I'm a Creator
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  visitorType === 'brand' ?'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md' :'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setVisitorType('brand')}
              >
                I'm a Brand
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;