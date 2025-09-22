import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FeaturesGrid = () => {

  const features = [
    {
      icon: 'Shield',
      title: 'Payment Protection',
      subtitle: 'Secure Escrow System',
      description: 'Your money is safe with our automated escrow system. Payments are released only when content meets agreed specifications.',
      color: 'green',
      stats: [
        { label: 'Success Rate', value: '99.8%' },
        { label: 'Avg Release Time', value: '2 hours' },
        { label: 'Disputes Resolved', value: '<1%' }
      ]
    },
    {
      icon: 'Star',
      title: 'Reputation System',
      subtitle: 'Quality Assurance',
      description: 'Our comprehensive rating system ensures you work with the best. Quality scores, delivery times, and communication ratings.',
      color: 'yellow',
      stats: [
        { label: 'Avg Creator Rating', value: '4.8★' },
        { label: 'Quality Score', value: '94%' },
        { label: 'Repeat Collaborations', value: '73%' }
      ]
    },
    {
      icon: 'Calendar',
      title: 'Operations Management',
      subtitle: 'Timeline Tracking',
      description: 'Never miss a deadline again. Real-time project tracking, milestone management, and automated reminders keep everyone on track.',
      color: 'blue',
      stats: [
        { label: 'On-Time Delivery', value: '96%' },
        { label: 'Avg Project Time', value: '3.2 days' },
        { label: 'Milestone Tracking', value: '100%' }
      ]
    }
  ];


  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Powerful <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Features</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need for successful creator-brand collaborations
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features?.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Feature Header */}
              <div className="text-center mb-5 sm:mb-6">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  feature?.color === 'green' ? 'bg-gradient-to-r from-green-100 to-green-200' :
                  feature?.color === 'yellow'? 'bg-gradient-to-r from-yellow-100 to-yellow-200' : 'bg-gradient-to-r from-blue-100 to-blue-200'
                }`}>
                  <Icon 
                    name={feature?.icon} 
                    size={24} 
                    className={
                      feature?.color === 'green' ? 'text-green-600' :
                      feature?.color === 'yellow'? 'text-yellow-600' : 'text-blue-600'
                    } 
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{feature?.title}</h3>
                <p className={`text-xs sm:text-sm font-medium mb-2 sm:mb-3 ${
                  feature?.color === 'green' ? 'text-green-600' :
                  feature?.color === 'yellow'? 'text-yellow-600' : 'text-blue-600'
                }`}>
                  {feature?.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">{feature?.description}</p>
              </div>


              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {feature?.stats?.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className={`text-base sm:text-lg font-bold ${
                      feature?.color === 'green' ? 'text-green-600' :
                      feature?.color === 'yellow'? 'text-yellow-600' : 'text-blue-600'
                    }`}>
                      {stat?.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-500">{stat?.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Experience These Features?
            </h3>
            <p className="text-gray-600 mb-5 sm:mb-6 text-sm sm:text-base">
              Join thousands of creators and brands who are already benefiting from our platform
            </p>
            <div className="flex items-center justify-center space-x-2 text-purple-600">
              <Icon name="ArrowDown" size={24} />
              <span className="font-semibold">Get started below</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;