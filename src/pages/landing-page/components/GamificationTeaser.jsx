import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const GamificationTeaser = () => {
  // Temporary flag to hide this section
  const shouldHideSection = true;

  if (shouldHideSection) {
    return null;
  }

  const [currentXP, setCurrentXP] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hoveredBadge, setHoveredBadge] = useState(null);

  const targetXP = 2847;
  const maxXP = 5000;
  const currentLevel = Math.floor(currentXP / 1000) + 1;
  const nextLevelXP = currentLevel * 1000;
  const progressPercent = ((currentXP % 1000) / 1000) * 100;

  const achievements = [
    {
      id: 1,
      name: 'First Delivery',
      description: 'Complete your first project',
      icon: 'Trophy',
      color: 'yellow',
      unlocked: true,
      xp: 100
    },
    {
      id: 2,
      name: 'Speed Demon',
      description: 'Deliver 5 projects early',
      icon: 'Zap',
      color: 'blue',
      unlocked: true,
      xp: 250
    },
    {
      id: 3,
      name: 'Quality Master',
      description: 'Maintain 4.8+ rating for 10 projects',
      icon: 'Star',
      color: 'purple',
      unlocked: true,
      xp: 500
    },
    {
      id: 4,
      name: 'Brand Favorite',
      description: 'Get 3 repeat collaborations',
      icon: 'Heart',
      color: 'pink',
      unlocked: false,
      xp: 300
    },
    {
      id: 5,
      name: 'Milestone Maker',
      description: 'Earn ₹8.3L total',
      icon: 'DollarSign',
      color: 'green',
      unlocked: false,
      xp: 1000
    },
    {
      id: 6,
      name: 'Community Leader',
      description: 'Help 5 new creators',
      icon: 'Users',
      color: 'indigo',
      unlocked: false,
      xp: 750
    }
  ];

  const rewards = [
    { level: 2, reward: 'Priority Support', icon: 'Headphones' },
    { level: 3, reward: 'Featured Profile', icon: 'Star' },
    { level: 4, reward: 'Premium Tools', icon: 'Wrench' },
    { level: 5, reward: 'VIP Events Access', icon: 'Calendar' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentXP(prev => {
          if (prev < targetXP) {
            return Math.min(prev + 47, targetXP);
          }
          clearInterval(interval);
          return prev;
        });
      }, 50);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetXP]);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  const ConfettiPiece = ({ delay = 0 }) => (
    <motion.div
      className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
      initial={{ 
        x: Math.random() * 400 - 200,
        y: -20,
        rotate: 0,
        scale: 1
      }}
      animate={{
        y: 400,
        rotate: 360,
        scale: 0
      }}
      transition={{
        duration: 2,
        delay,
        ease: "easeOut"
      }}
    />
  );

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Confetti Animation */}
      <AnimatePresence>
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none z-10">
            {[...Array(50)]?.map((_, i) => (
              <ConfettiPiece key={i} delay={i * 0.1} />
            ))}
          </div>
        )}
      </AnimatePresence>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Level Up Your <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Creator Journey</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Earn XP, unlock achievements, and get rewarded for your success
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* XP Progress Section */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl border"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {currentLevel}
                </div>
                <div className="text-gray-600 font-medium">Creator Level</div>
              </div>

              {/* XP Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    {currentXP?.toLocaleString()} XP
                  </span>
                  <span className="text-sm text-gray-500">
                    {nextLevelXP?.toLocaleString()} XP
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 2, delay: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse rounded-full"></div>
                  </motion.div>
                </div>
                <div className="text-center mt-2">
                  <span className="text-sm text-gray-600">
                    {Math.round((1000 - (currentXP % 1000)))} XP to next level
                  </span>
                </div>
              </div>

              {/* Level Rewards */}
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 mb-4">Upcoming Rewards</h4>
                {rewards?.map((reward, index) => (
                  <motion.div
                    key={reward?.level}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                      currentLevel >= reward?.level 
                        ? 'bg-green-50 border border-green-200' :'bg-gray-50 border border-gray-200'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentLevel >= reward?.level ? 'bg-green-500' : 'bg-gray-300'
                    }`}>
                      <Icon 
                        name={currentLevel >= reward?.level ? 'Check' : reward?.icon} 
                        size={16} 
                        className="text-white" 
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Level {reward?.level}</div>
                      <div className="text-sm text-gray-600">{reward?.reward}</div>
                    </div>
                    {currentLevel >= reward?.level && (
                      <div className="text-green-600 font-medium text-sm">Unlocked!</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl border"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Achievements</h3>
                <button
                  onClick={triggerConfetti}
                  className="text-purple-600 hover:text-purple-700 transition-colors duration-300"
                >
                  <Icon name="Sparkles" size={24} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {achievements?.map((achievement, index) => (
                  <motion.div
                    key={achievement?.id}
                    className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      achievement?.unlocked
                        ? `border-${achievement?.color}-200 bg-${achievement?.color}-50 hover:shadow-lg`
                        : 'border-gray-200 bg-gray-50 opacity-60'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: achievement?.unlocked ? 1.05 : 1 }}
                    onHoverStart={() => setHoveredBadge(achievement?.id)}
                    onHoverEnd={() => setHoveredBadge(null)}
                    onClick={achievement?.unlocked ? triggerConfetti : undefined}
                  >
                    <div className="text-center">
                      <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 ${
                        achievement?.unlocked
                          ? `bg-${achievement?.color}-500`
                          : 'bg-gray-300'
                      }`}>
                        <Icon 
                          name={achievement?.icon} 
                          size={20} 
                          className="text-white" 
                        />
                      </div>
                      <h4 className="font-bold text-sm text-gray-900 mb-1">
                        {achievement?.name}
                      </h4>
                      <p className="text-xs text-gray-600 leading-tight">
                        {achievement?.description}
                      </p>
                      {achievement?.unlocked && (
                        <div className={`mt-2 text-xs font-bold text-${achievement?.color}-600`}>
                          +{achievement?.xp} XP
                        </div>
                      )}
                    </div>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {hoveredBadge === achievement?.id && achievement?.unlocked && (
                        <motion.div
                          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap z-20"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          Click for confetti! 🎉
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Achievement Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {achievements?.filter(a => a?.unlocked)?.length}
                    </div>
                    <div className="text-sm text-gray-600">Unlocked</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      {achievements?.reduce((sum, a) => sum + (a?.unlocked ? a?.xp : 0), 0)}
                    </div>
                    <div className="text-sm text-gray-600">Total XP</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {Math.round((achievements?.filter(a => a?.unlocked)?.length / achievements?.length) * 100)}%
                    </div>
                    <div className="text-sm text-gray-600">Complete</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Coming Soon Teaser */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                This is Just the Beginning
              </h3>
              <p className="mb-6 opacity-90">
                Leaderboards, seasonal challenges, exclusive creator events, and much more coming soon!
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Rocket" size={24} />
                <span className="font-semibold">Join the beta to experience it first</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GamificationTeaser;