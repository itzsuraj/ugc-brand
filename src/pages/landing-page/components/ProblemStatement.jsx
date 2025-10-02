import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProblemStatement = () => {

  const creatorProblems = [
    {
      icon: 'DollarSign',
      title: 'Payment Delays',
      description: 'You pour your heart into creating content… and then wait 30–90 days to get paid.',
      emoji: '😤',
      stat: '73% of creators experience this'
    },
    {
      icon: 'MessageSquare',
      title: 'Unclear Briefs & Endless Revisions',
      description: '"Can you just tweak this one thing?" becomes 10 rounds of edits because the brief was never clear to begin with. Hours of extra work for the same pay.',
      emoji: '😵‍💫',
      stat: 'Average 4.2 revisions per project'
    },
    {
      icon: 'UserX',
      title: 'Brand Ghosting',
      description: 'Sometimes, the brand vanishes altogether, leaving you chasing invoices instead of focusing on your craft.',
      emoji: '👻',
      stat: '41% report communication issues'
    }
  ];

  const brandProblems = [
    {
      icon: 'Clock',
      title: 'Missed Deadlines',
      description: '68% of campaigns get delayed because creators deliver late or not at all — costing you launches, trends, and revenue.',
      emoji: '⏰',
      stat: '68% of campaigns delayed'
    },
    {
      icon: 'AlertTriangle',
      title: 'Inconsistent Quality',
      description: '52% of submissions need major revisions, wasting time and stretching your team\'s bandwidth.',
      emoji: '😬',
      stat: '52% require major revisions'
    },
    {
      icon: 'MessageCircleX',
      title: 'Endless Creator Hunt',
      description: 'DMs, spreadsheets, and cold outreach take hours — and half the creators don\'t reply.',
      emoji: '📵',
      stat: 'Average 2-day response time'
    }
  ];


  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Problem is <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Real</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Both creators and brands are frustrated with the current state of Floovio collaboration
          </motion.p>
        </div>


        {/* Problems Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Creator Problems */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Creator <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Pain Points</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {creatorProblems?.map((problem, index) => (
                <motion.div
                  key={`creator-${index}`}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{problem?.emoji}</div>
                    <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 bg-gradient-to-r from-purple-100 to-pink-100">
                      <Icon 
                        name={problem?.icon} 
                        size={24} 
                        className="text-purple-600" 
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {problem?.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-center leading-relaxed">
                    {problem?.description}
                  </p>
                  
                  <div className="text-center p-3 rounded-lg bg-purple-50 text-purple-700">
                    <span className="text-sm font-semibold">{problem?.stat}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Brand Problems */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Brand <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Struggles</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {brandProblems?.map((problem, index) => (
                <motion.div
                  key={`brand-${index}`}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{problem?.emoji}</div>
                    <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 bg-gradient-to-r from-blue-100 to-blue-200">
                      <Icon 
                        name={problem?.icon} 
                        size={24} 
                        className="text-blue-600" 
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {problem?.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-center leading-relaxed">
                    {problem?.description}
                  </p>
                  
                  <div className="text-center p-3 rounded-lg bg-blue-50 text-blue-700">
                    <span className="text-sm font-semibold">{problem?.stat}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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