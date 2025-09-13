import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProblemStatement = () => {
  const [activeTab, setActiveTab] = useState('creator');

  const creatorProblems = [
    {
      icon: 'DollarSign',
      title: 'Payment Delays',
      description: 'Waiting 30-90 days for payment after delivering content',
      emoji: '😤',
      stat: '73% of creators experience this'
    },
    {
      icon: 'MessageSquare',
      title: 'Unclear Briefs',
      description: 'Vague requirements leading to endless revisions',
      emoji: '😵‍💫',
      stat: 'Average 4.2 revisions per project'
    },
    {
      icon: 'UserX',
      title: 'Brand Ghosting',
      description: 'Brands disappearing after content delivery',
      emoji: '👻',
      stat: '41% report communication issues'
    }
  ];

  const brandProblems = [
    {
      icon: 'Clock',
      title: 'Missed Deadlines',
      description: 'Creators delivering content late or not at all',
      emoji: '⏰',
      stat: '68% of campaigns delayed'
    },
    {
      icon: 'AlertTriangle',
      title: 'Quality Issues',
      description: 'Content not meeting brand standards or guidelines',
      emoji: '😬',
      stat: '52% require major revisions'
    },
    {
      icon: 'MessageCircleX',
      title: 'Communication Gaps',
      description: 'Difficulty reaching creators during projects',
      emoji: '📵',
      stat: 'Average 2-day response time'
    }
  ];

  const currentProblems = activeTab === 'creator' ? creatorProblems : brandProblems;

  return (
    <section className="py-20 pt-3 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Problem is <span className="text-red-500">Real</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Both creators and brands are frustrated with the current state of UGC collaboration
          </motion.p>
        </div>

        {/* Tab Selector */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-full p-2 shadow-lg border">
            <button
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeTab === 'creator' ?'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md' :'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('creator')}
            >
              Creator Pain Points
            </button>
            <button
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeTab === 'brand' ?'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md' :'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('brand')}
            >
              Brand Struggles
            </button>
          </div>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentProblems?.map((problem, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{problem?.emoji}</div>
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  activeTab === 'creator' ?'bg-gradient-to-r from-purple-100 to-pink-100' :'bg-gradient-to-r from-blue-100 to-blue-200'
                }`}>
                  <Icon 
                    name={problem?.icon} 
                    size={24} 
                    className={activeTab === 'creator' ? 'text-purple-600' : 'text-blue-600'} 
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {problem?.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-center leading-relaxed">
                {problem?.description}
              </p>
              
              <div className={`text-center p-3 rounded-lg ${
                activeTab === 'creator' ?'bg-purple-50 text-purple-700' :'bg-blue-50 text-blue-700'
              }`}>
                <span className="text-sm font-semibold">{problem?.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              There Has to Be a Better Way
            </h3>
            <p className="text-gray-600 mb-6">
              What if we could solve these problems for both creators and brands simultaneously?
            </p>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Icon name="ArrowDown" size={24} />
              <span className="font-semibold">Let us show you how</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;