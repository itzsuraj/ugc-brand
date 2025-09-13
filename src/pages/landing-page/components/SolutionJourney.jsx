import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SolutionJourney = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: 'Creators Set Up Profile',
      description: 'Upload portfolio, set rates, and showcase your best work',
      icon: 'User',
      color: 'purple',
      details: [
        'Portfolio verification system',
        'Transparent rate setting',
        'Skill-based matching',
        'Quality score tracking'
      ],
      tooltip: 'Our AI analyzes your portfolio to match you with relevant brands'
    },
    {
      id: 2,
      title: 'Brands Browse & Select',
      description: 'Find creators instantly with smart filters and brief templates',
      icon: 'Search',
      color: 'blue',
      details: [
        'Advanced creator filtering',
        'Pre-built brief templates',
        'Budget estimation tools',
        'Timeline planning'
      ],
      tooltip: 'Smart matching ensures you find creators who understand your brand'
    },
    {
      id: 3,
      title: 'Automated Protection',
      description: 'Escrow holds payment, content delivered, everyone gets paid',
      icon: 'Shield',
      color: 'green',
      details: [
        'Secure escrow system',
        'Milestone-based payments',
        'Quality assurance checks',
        'Dispute resolution'
      ],
      tooltip: 'Payment is guaranteed once content meets agreed specifications'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How It <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Works</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A simple 3-step process that protects both creators and brands
          </motion.p>
        </div>

        {/* Interactive Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
              <motion.div
                className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-purple-500 to-green-500 transform -translate-y-1/2"
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>

              {/* Steps */}
              <div className="relative flex justify-between items-center">
                {steps?.map((step, index) => (
                  <motion.div
                    key={step?.id}
                    className="flex flex-col items-center cursor-pointer group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveStep(index)}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Step Circle */}
                    <div className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg transition-all duration-300 ${
                      step?.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      step?.color === 'blue'? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-green-500 to-green-600'
                    } ${activeStep === index ? 'scale-110 shadow-xl' : 'hover:scale-105'}`}>
                      <Icon name={step?.icon} size={28} className="text-white" />
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="bg-gray-900 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap">
                          {step?.tooltip}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </div>

                    {/* Step Info */}
                    <div className="text-center max-w-xs">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step?.title}</h3>
                      <p className="text-gray-600 text-sm">{step?.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6 sm:space-y-8">
            {steps?.map((step, index) => (
              <motion.div
                key={step?.id}
                className="flex items-start space-x-3 sm:space-x-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg ${
                  step?.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                  step?.color === 'blue'? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-green-500 to-green-600'
                }`}>
                  <Icon name={step?.icon} size={22} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{step?.title}</h3>
                  <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base">{step?.description}</p>
                  <ul className="space-y-1">
                    {step?.details?.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-xs sm:text-sm text-gray-500">
                        <Icon name="Check" size={14} className="text-green-500 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Step Details (Desktop) */}
          <motion.div
            className="hidden md:block mt-16 bg-gray-50 rounded-2xl p-8"
            key={activeStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Step {activeStep + 1}: {steps?.[activeStep]?.title}
              </h3>
              <p className="text-gray-600 text-lg">{steps?.[activeStep]?.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps?.[activeStep]?.details?.map((detail, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm border"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span className="text-sm font-medium text-gray-700">{detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Success Metrics */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">The Results Speak for Themselves</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">3 Days</div>
                <div className="text-gray-600">Average Delivery Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">99%</div>
                <div className="text-gray-600">Payment Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">4.8★</div>
                <div className="text-gray-600">Average Quality Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionJourney;