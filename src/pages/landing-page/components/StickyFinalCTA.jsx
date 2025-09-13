import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const StickyFinalCTA = ({ heroSectionRef, onJoinAsCreator, onJoinAsBrand }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [remainingSpots, setRemainingSpots] = useState(847);
  const [urgencyMessage, setUrgencyMessage] = useState('');
  const [isReturningUser, setIsReturningUser] = useState(false);

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

  useEffect(() => {
    // Check if returning user
    const hasVisited = localStorage.getItem('ugc_marketplace_visited');
    if (hasVisited) {
      setIsReturningUser(true);
      setUrgencyMessage('Complete Your Application');
    } else {
      localStorage.setItem('ugc_marketplace_visited', 'true');
      setUrgencyMessage(`Limited Beta Spots - ${remainingSpots} Remaining`);
    }

    // Simulate decreasing spots
    const interval = setInterval(() => {
      setRemainingSpots(prev => {
        if (prev > 800) {
          return prev - Math.floor(Math.random() * 3) - 1;
        }
        return prev;
      });
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [remainingSpots]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

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
        {/* Urgency Bar */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-center py-2 px-4">
          <div className="flex items-center justify-center space-x-2 text-sm font-medium">
            <Icon name="Clock" size={16} />
            <span>{urgencyMessage}</span>
            {!isReturningUser && (
              <div className="flex items-center space-x-1 ml-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs">{remainingSpots} spots left</span>
              </div>
            )}
          </div>
        </div>

        {/* Main CTA Content */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {isReturningUser ? 'Ready to Join?' : 'Don\'t Miss Out!'}
              </h3>
              <p className="text-sm text-gray-600">
                {isReturningUser 
                  ? 'Complete your waitlist application now'
                  : 'Join the exclusive beta and be among the first to experience our platform'
                }
              </p>
            </div>

            <div className="flex items-center space-x-3 ml-4">
              {/* Expand Button */}
              <button
                onClick={toggleExpanded}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon name="ChevronUp" size={20} className="text-gray-600" />
                </motion.div>
              </button>

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
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pt-6 border-t border-gray-200 mt-4">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Benefits */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Icon name="Star" size={16} className="mr-2 text-yellow-500" />
                        Beta Benefits
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <Icon name="Check" size={14} className="mr-2 text-green-500" />
                          Early access to all features
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" size={14} className="mr-2 text-green-500" />
                          Reduced platform fees
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" size={14} className="mr-2 text-green-500" />
                          Priority customer support
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" size={14} className="mr-2 text-green-500" />
                          Exclusive community access
                        </li>
                      </ul>
                    </div>

                    {/* Social Proof */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Icon name="Users" size={16} className="mr-2 text-blue-500" />
                        Join the Community
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          <span>2,847 creators already joined</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                          <span>156 brands waiting</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                          <span>₹7.1Cr+ in pending projects</span>
                        </div>
                      </div>
                    </div>

                    {/* Urgency */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Icon name="Zap" size={16} className="mr-2 text-orange-500" />
                        Limited Time
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center justify-between">
                          <span>Beta spots remaining:</span>
                          <span className="font-bold text-red-600">{remainingSpots}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${(remainingSpots / 1000) * 100}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500">
                          Applications close when we reach capacity
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Icon name="Shield" size={16} className="mr-1 text-green-500" />
                        <span>Secure signup</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Clock" size={16} className="mr-1 text-blue-500" />
                        <span>2-minute process</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="X" size={16} className="mr-1 text-gray-400" />
                        <span>No spam, ever</span>
                      </div>
                    </div>

                    <button
                      onClick={toggleExpanded}
                      className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    >
                      Minimize
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StickyFinalCTA;