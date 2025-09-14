import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FeaturesGrid = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: 'Shield',
      title: 'Payment Protection',
      subtitle: 'Secure Escrow System',
      description: 'Your money is safe with our automated escrow system. Payments are released only when content meets agreed specifications.',
      color: 'green',
      demo: {
        type: 'escrow',
        steps: [
          { label: 'Brand deposits payment', status: 'completed' },
          { label: 'Creator delivers content', status: 'completed' },
          { label: 'Quality review passed', status: 'completed' },
          { label: 'Payment released', status: 'active' }
        ]
      },
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
      demo: {
        type: 'rating',
        profile: {
          name: 'Sarah Chen',
          overallRating: 4.9,
          totalReviews: 127,
          categories: [
            { name: 'Content Quality', rating: 4.9 },
            { name: 'Communication', rating: 4.8 },
            { name: 'Delivery Time', rating: 5.0 },
            { name: 'Professionalism', rating: 4.9 }
          ]
        }
      },
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
      demo: {
        type: 'timeline',
        project: {
          name: 'Summer Campaign 2024',
          progress: 75,
          milestones: [
            { name: 'Brief Approved', date: '2024-01-15', status: 'completed' },
            { name: 'Content Creation', date: '2024-01-20', status: 'completed' },
            { name: 'First Review', date: '2024-01-22', status: 'active' },
            { name: 'Final Delivery', date: '2024-01-25', status: 'pending' }
          ]
        }
      },
      stats: [
        { label: 'On-Time Delivery', value: '96%' },
        { label: 'Avg Project Time', value: '3.2 days' },
        { label: 'Milestone Tracking', value: '100%' }
      ]
    }
  ];

  const renderDemo = (feature) => {
    switch (feature?.demo?.type) {
      case 'escrow':
        return (
          <div className="space-y-3">
            {feature?.demo?.steps?.map((step, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  step?.status === 'completed' ? 'bg-green-500' :
                  step?.status === 'active'? 'bg-blue-500 animate-pulse' : 'bg-gray-300'
                }`}>
                  {step?.status === 'completed' && <Icon name="Check" size={12} className="text-white" />}
                  {step?.status === 'active' && <Icon name="Clock" size={12} className="text-white" />}
                </div>
                <span className={`text-sm ${
                  step?.status === 'completed' ? 'text-green-700' :
                  step?.status === 'active'? 'text-blue-700' : 'text-gray-500'
                }`}>
                  {step?.label}
                </span>
              </div>
            ))}
          </div>
        );

      case 'rating':
        return (
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-1">
                {feature?.demo?.profile?.overallRating}★
              </div>
              <div className="text-sm text-gray-600">
                {feature?.demo?.profile?.totalReviews} reviews
              </div>
            </div>
            <div className="space-y-2">
              {feature?.demo?.profile?.categories?.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{category?.name}</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium">{category?.rating}</span>
                    <Icon name="Star" size={12} className="text-yellow-400 fill-current" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-gray-900">{feature?.demo?.project?.name}</span>
              <span className="text-sm text-gray-600">{feature?.demo?.project?.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <motion.div
                className="bg-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${feature?.demo?.project?.progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <div className="space-y-2">
              {feature?.demo?.project?.milestones?.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${
                    milestone?.status === 'completed' ? 'bg-green-500' :
                    milestone?.status === 'active'? 'bg-blue-500' : 'bg-gray-300'
                  }`} />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{milestone?.name}</div>
                    <div className="text-xs text-gray-500">{milestone?.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
              className={`bg-white rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg border-2 cursor-pointer transition-all duration-300 ${
                activeFeature === index 
                  ? `border-${feature?.color}-500 shadow-xl scale-105` 
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setActiveFeature(index)}
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

              {/* Interactive Demo */}
              <div className={`bg-gray-50 rounded-lg p-4 mb-5 sm:mb-6 ${
                activeFeature === index ? 'bg-opacity-100' : 'bg-opacity-50'
              }`}>
                {activeFeature === index ? renderDemo(feature) : (
                  <div className="text-center py-8">
                    <Icon name="Play" size={24} className="text-gray-400 mx-auto mb-2" />
                    <span className="text-sm text-gray-500">Click to see demo</span>
                  </div>
                )}
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