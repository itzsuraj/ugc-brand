import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const StickyFinalCTA = ({ heroSectionRef, onJoinAsCreator, onJoinAsBrand }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (heroSectionRef?.current) {
        const heroRect = heroSectionRef?.current?.getBoundingClientRect();
        // Show CTA when hero section is scrolled past (top of hero is above viewport)
        const heroScrolledPast = heroRect?.bottom <= 0;
        setIsVisible(heroScrolledPast);
      } else {
        // Fallback to previous behavior if ref is not available
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement?.scrollHeight;
        
        // Show when user has scrolled 50% of the page
        const showThreshold = (documentHeight - windowHeight) * 0.5;
        setIsVisible(scrollPosition > showThreshold);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroSectionRef]);


  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >

        {/* Main CTA Content */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Ready to Join?
              </h3>
              <p className="text-sm text-gray-600">
                Join our platform and be among the first to experience our marketplace
              </p>
            </div>

            <div className="flex items-center space-x-3 ml-4">

              {/* CTA Buttons */}
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onJoinAsBrand}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-blue-600 hover:from-blue-700 hover:to-blue-900"
                  iconName="Building2"
                  iconPosition="left"
                >
                  Join as Brand
                </Button>
                
                <Button
                  variant="default"
                  size="sm"
                  onClick={onJoinAsCreator}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg"
                  iconName="Users"
                  iconPosition="left"
                >
                  Join as Creator
                </Button>
              </div>
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StickyFinalCTA;