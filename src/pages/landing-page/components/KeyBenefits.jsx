import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const KeyBenefits = ({ visitorType = 'creator' }) => {
  const creatorBenefits = [
    {
      icon: 'DollarSign',
      title: 'Consistent Paid Work',
      description: 'No more pitching endlessly. Get matched with brands actively looking for creators like you.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Users',
      title: 'Less Followers? No Problem',
      description: 'We value your skill, not just your audience size. Get paid for your content, not your clout.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Briefcase',
      title: 'Build Your Portfolio',
      description: 'Showcase your best work and attract higher-paying opportunities over time.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Shield',
      title: 'Secure Payments',
      description: 'Say goodbye to ghosted invoices. Your payments are held in escrow and released once the brand approves your work.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const brandBenefits = [
    {
      icon: 'Heart',
      title: 'Authenticity That Converts',
      description: 'Your customers trust people, not ads. Tap into creators who speak your audience\'s language and make your brand relatable.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'Zap',
      title: 'On-Demand Creator Network',
      description: 'No endless outreach. Get instant access to a pool of talented creators ready to produce fresh, brand-safe content.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: 'Clock',
      title: 'Faster Campaign Turnaround',
      description: 'Go from idea to published campaign in days, not weeks. Keep up with trends while they\'re still hot.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: 'BarChart',
      title: 'Performance Insights',
      description: 'Track content performance with built-in analytics to see what drives conversions and double down on what works.',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const currentBenefits = visitorType === 'creator' ? creatorBenefits : brandBenefits;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Key Benefits for <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {visitorType === 'creator' ? 'Creators' : 'Brands'}
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {visitorType === 'creator' 
              ? 'Everything you need to turn your creativity into consistent income'
              : 'Everything you need to scale your content marketing with authentic creators'
            }
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {currentBenefits?.map((benefit, index) => (
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
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon 
                    name={benefit.icon} 
                    size={32} 
                    className="text-white" 
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
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
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {visitorType === 'creator' 
                ? 'Ready to Start Your Creator Journey?' 
                : 'Ready to Scale Your Content Marketing?'
              }
            </h3>
            <p className="text-gray-600 mb-6">
              {visitorType === 'creator' 
                ? 'Join thousands of creators who are already building successful brand partnerships'
                : 'Join hundreds of brands who trust UGCBox for their content needs'
              }
            </p>
            <div className="flex items-center justify-center space-x-2 text-purple-600">
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

export default KeyBenefits;
