import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const WhyChooseFloovio = ({ visitorType = 'creator' }) => {
  const creatorReasons = [
    {
      icon: 'Users',
      title: 'Work with Brands You Love',
      description: 'Collaborate with businesses that match your niche and values.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'TrendingUp',
      title: 'Grow Your Skills & Rates',
      description: 'Get feedback, improve your craft, and command better pricing with each gig.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Focus',
      title: 'Focus on Creating, Not Chasing Clients',
      description: 'We handle the boring parts — contracts, payments, and admin.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Shield',
      title: 'Secure Payments',
      description: 'Say goodbye to ghosted invoices. Your payments are held in escrow and released once the brand approves your work.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const brandReasons = [
    {
      icon: 'Award',
      title: 'Vetted Talent, Not Random Influencers',
      description: 'Every creator is screened for quality, creativity, and engagement before joining.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Shield',
      title: 'Brand-Safe Workflow',
      description: 'Approve everything before publishing, keeping your brand reputation protected.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Target',
      title: 'Conversion-First Mindset',
      description: 'We focus on content that drives measurable results — leads, clicks, and sales.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Zap',
      title: 'Scalable Content Engine',
      description: 'Get dozens of variations fast to test, iterate, and grow.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const currentReasons = visitorType === 'creator' ? creatorReasons : brandReasons;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Floovio</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {visitorType === 'creator' 
              ? 'Everything you need to build a successful creator career'
              : 'Everything you need to scale your content marketing with confidence'
            }
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {currentReasons?.map((reason, index) => (
            <motion.div
              key={`${visitorType}-${index}`}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${reason.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon 
                    name={reason.icon} 
                    size={32} 
                    className="text-white" 
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 max-w-4xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">
              {visitorType === 'creator' 
                ? 'Ready to Start Your Creator Journey?' 
                : 'Ready to Scale Your Content Marketing?'
              }
            </h3>
            <p className="text-purple-100 mb-6">
              {visitorType === 'creator' 
                ? 'Join thousands of creators who are already building successful brand partnerships'
                : 'Join hundreds of brands who trust Floovio for their content needs'
              }
            </p>
            <div className="flex items-center justify-center space-x-2 text-white">
              <Icon name="ArrowRight" size={24} />
              <span className="font-semibold">
                {visitorType === 'creator' 
                  ? 'Start Your Creator Journey →' 
                  : 'Hire Your First Creator Today →'
                }
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseFloovio;
