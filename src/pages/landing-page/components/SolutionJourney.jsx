import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SolutionJourney = ({ visitorType = 'creator' }) => {
  const [activeStep, setActiveStep] = useState(0);

  const creatorSteps = [
    {
      id: 1,
      title: 'Create Your Profile',
      description: 'Show off your skills, content style, and rates',
      icon: 'User',
      color: 'purple',
      details: [
        'Upload your best work samples',
        'Set your rates and availability',
        'Define your content style',
        'Add your social media links'
      ],
      tooltip: 'Build a compelling profile that attracts the right brands'
    },
    {
      id: 2,
      title: 'Apply for Brand Briefs',
      description: 'Browse open opportunities and submit your ideas',
      icon: 'Search',
      color: 'blue',
      details: [
        'Browse available projects',
        'Submit creative proposals',
        'Showcase your unique approach',
        'Get matched with relevant brands'
      ],
      tooltip: 'Find projects that match your skills and interests'
    },
    {
      id: 3,
      title: 'Create & Deliver Content',
      description: 'Produce content, submit for approval, and make revisions if needed',
      icon: 'Camera',
      color: 'green',
      details: [
        'Create high-quality content',
        'Submit for brand review',
        'Make requested revisions',
        'Deliver final approved content'
      ],
      tooltip: 'Focus on creating while we handle the logistics'
    },
    {
      id: 4,
      title: 'Get Paid Automatically',
      description: 'Once approved, your payment is released instantly',
      icon: 'DollarSign',
      color: 'orange',
      details: [
        'Instant payment upon approval',
        'No chasing invoices',
        'Secure escrow protection',
        'Track all payments in one place'
      ],
      tooltip: 'Get paid on time, every time'
    }
  ];

  const brandSteps = [
    {
      id: 1,
      title: 'Post Your Brief',
      description: 'Tell us what you need — platform, style, budget, and goals',
      icon: 'FileText',
      color: 'purple',
      details: [
        'Define your content requirements',
        'Set your budget and timeline',
        'Choose target platforms',
        'Specify your brand guidelines'
      ],
      tooltip: 'Create a clear brief to attract the right creators'
    },
    {
      id: 2,
      title: 'Match with Creators',
      description: 'Our platform pairs you with vetted creators who are a perfect fit for your brand',
      icon: 'Users',
      color: 'blue',
      details: [
        'AI-powered creator matching',
        'Review creator portfolios',
        'Check ratings and reviews',
        'Select your preferred creators'
      ],
      tooltip: 'Find creators who understand your brand and audience'
    },
    {
      id: 3,
      title: 'Complete the Escrow Payment',
      description: 'Pay Floovio to get the gears of virality rolling',
      icon: 'CreditCard',
      color: 'green',
      details: [
        'Secure payment processing',
        'Funds held in escrow',
        'Payment protection for both parties',
        'Transparent fee structure'
      ],
      tooltip: 'Your payment is safe until you approve the content'
    },
    {
      id: 4,
      title: 'Review & Approve Content',
      description: 'Get drafts, request edits, and approve content before it goes live',
      icon: 'Eye',
      color: 'orange',
      details: [
        'Review content drafts',
        'Request specific revisions',
        'Approve final content',
        'Download high-quality files'
      ],
      tooltip: 'Full control over your content before it goes live'
    },
    {
      id: 5,
      title: 'Pay When You\'re Happy',
      description: 'Funds are released to creators only after final approval, keeping your campaigns risk-free',
      icon: 'Shield',
      color: 'red',
      details: [
        'Payment only after approval',
        'Risk-free for brands',
        'Automatic payment release',
        'Satisfaction guaranteed'
      ],
      tooltip: 'Only pay for content you love'
    }
  ];

  const steps = visitorType === 'creator' ? creatorSteps : brandSteps;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
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
            {visitorType === 'creator' 
              ? 'A simple 4-step process to turn your creativity into income'
              : 'A simple 5-step process that protects both creators and brands'
            }
          </motion.p>
        </div>

        {/* Interactive Timeline */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Timeline - Improved Layout */}
          <div className="hidden lg:block">
            <div className="relative">

              {/* Steps */}
              <div className="relative flex justify-between items-start">
                {steps?.map((step, index) => (
                  <motion.div
                    key={step?.id}
                    className="flex flex-col items-center cursor-pointer group flex-1 px-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveStep(index)}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Step Circle */}
                    <div className={`relative w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-xl transition-all duration-300 ${
                      step?.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      step?.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 
                      step?.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      step?.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                      'bg-gradient-to-r from-red-500 to-red-600'
                    } ${activeStep === index ? 'scale-110 shadow-2xl' : 'hover:scale-105'}`}>
                      <Icon name={step?.icon} size={32} className="text-white" />
                      
                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
                        <span className="text-sm font-bold text-gray-700">{step?.id}</span>
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                        <div className="bg-gray-900 text-white text-sm rounded-lg px-4 py-2 whitespace-nowrap shadow-xl">
                          {step?.tooltip}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </div>

                    {/* Step Info */}
                    <div className="text-center max-w-xs">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{step?.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed">{step?.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-10">
              {steps?.map((step, index) => (
                <motion.div
                  key={step?.id}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                    step?.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                    step?.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 
                    step?.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                    step?.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                    'bg-gradient-to-r from-red-500 to-red-600'
                  }`}>
                    <Icon name={step?.icon} size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-bold text-gray-500 mr-2">Step {step?.id}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step?.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step?.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-10">
            {steps?.map((step, index) => (
              <motion.div
                key={step?.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                    step?.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                    step?.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 
                    step?.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                    step?.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                    'bg-gradient-to-r from-red-500 to-red-600'
                  }`}>
                    <Icon name={step?.icon} size={24} className="text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
                      <span className="text-xs font-bold text-gray-700">{step?.id}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step?.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">{step?.description}</p>
                    <ul className="space-y-2">
                      {step?.details?.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-xs text-gray-500">
                          <Icon name="Check" size={14} className="text-green-500 mr-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Step Details (Desktop) */}
          <motion.div
            className="hidden lg:block mt-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-10 shadow-xl"
            key={activeStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6">
                <span className="text-2xl font-bold text-gray-700">{activeStep + 1}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {steps?.[activeStep]?.title}
              </h3>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">{steps?.[activeStep]?.description}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {steps?.[activeStep]?.details?.map((detail, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" size={16} className="text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 leading-relaxed">{detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Success Metrics */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 sm:p-12 max-w-5xl mx-auto text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">The Results Speak for Themselves</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-3">3 Days</div>
                <div className="text-purple-100 text-lg">Average Delivery Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-3">99%</div>
                <div className="text-purple-100 text-lg">Payment Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-3">4.8★</div>
                <div className="text-purple-100 text-lg">Average Quality Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionJourney;