import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      category: 'General',
      question: 'How does the Floovio marketplace work?',
      answer: `Our platform connects brands with verified Floovio creators through a streamlined process:\n\n1. Creators build profiles showcasing their work and set their rates\n2. Brands browse creators using smart filters and send project briefs\n3. Creators accept projects and deliver content within agreed timelines\n4. Our escrow system ensures secure payment upon content approval\n\nWe handle all the logistics, from initial matching to final payment, making collaboration seamless for both parties.`,
      icon: 'HelpCircle'
    },
    {
      category: 'Payment',
      question: 'How does payment protection work?',
      answer: `Our escrow system provides complete payment protection:\n\n• Brands deposit payment upfront, held securely in escrow\n• Creators deliver content according to agreed specifications\n• Our quality assurance team reviews submissions\n• Payment is automatically released upon approval\n• Dispute resolution available if needed\n\nCreators are guaranteed payment for approved work, while brands only pay for content that meets their requirements. Average payment release time is under 2 hours after approval.`,
      icon: 'Shield'
    },
    {
      category: 'For Creators',
      question: 'What are the requirements to join as a creator?',
      answer: `To join our creator community, you need:\n\n• Active social media presence (minimum 1K followers)\n• Portfolio of high-quality content examples\n• Consistent posting history (at least 3 months)\n• Professional communication skills\n• Ability to meet deadlines consistently\n\nWe review all applications to ensure quality standards. Our approval process typically takes 24-48 hours, and we provide feedback if additional information is needed.`,
      icon: 'Users'
    },
    {
      category: 'For Brands',
      question: 'How do you ensure content quality?',
      answer: `We maintain high quality standards through:\n\n• Rigorous creator vetting process with portfolio review\n• Reputation system tracking delivery time and quality scores\n• Pre-built brief templates ensuring clear requirements\n• Milestone-based project management with checkpoints\n• Quality assurance team reviewing all submissions\n• Revision rounds included in all packages\n\nOur creators maintain an average 4.8/5 quality rating, with 96% of projects delivered on time and meeting brand requirements.`,
      icon: 'Star'
    },
    {
      category: 'Pricing',
      question: 'What are the platform fees?',
      answer: `Our transparent fee structure:\n\n• Creators: 10% platform fee on earnings\n• Brands: 5% processing fee on payments\n• No hidden charges or setup fees\n• Payment processing included\n• Dispute resolution included\n• Customer support included\n\nFees are only charged on successful transactions. We believe in transparent pricing with no surprises - what you see is what you pay.`,
      icon: 'DollarSign'
    },
    {
      category: 'Timeline',
      question: 'How long do projects typically take?',
      answer: `Project timelines vary by content type:\n\n• Simple posts/stories: 1-2 days\n• Video content: 3-5 days\n• Complex campaigns: 1-2 weeks\n• Bulk content packages: 1-3 weeks\n\nOur platform average is 3.2 days from brief to delivery. Creators set their own timelines during the proposal process, and we track all milestones to ensure on-time delivery. Rush orders available for urgent projects.`,
      icon: 'Clock'
    },
    {
      category: 'Support',
      question: 'What support do you provide during projects?',
      answer: `Comprehensive support throughout your journey:\n\n• Dedicated account managers for enterprise clients\n• 24/7 chat support for urgent issues\n• Project management tools and timeline tracking\n• Template briefs and best practice guides\n• Dispute resolution and mediation services\n• Educational resources and webinars\n\nOur support team responds within 2 hours during business hours and provides hands-on assistance to ensure project success.`,
      icon: 'Headphones'
    },
    {
      category: 'Getting Started',
      question: 'How quickly can I start working after joining?',
      answer: `Timeline to get started:\n\n• Creator approval: 24-48 hours after application\n• Profile setup: 15-30 minutes\n• First project opportunities: Immediately after approval\n• Brand verification: Same day for most companies\n• First campaign launch: Within 24 hours of approval\n\nWe prioritize quick onboarding while maintaining quality standards. Our team provides personalized guidance to help you succeed from day one.`,
      icon: 'Rocket'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };


  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Frequently Asked <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Questions</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to know about our Floovio marketplace platform
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs?.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      openIndex === index 
                        ? 'bg-purple-100' :'bg-gray-100'
                    }`}>
                      <Icon 
                        name={faq?.icon} 
                        size={20} 
                        className={openIndex === index ? 'text-purple-600' : 'text-gray-600'} 
                      />
                    </div>
                    <div>
                      <div className={`text-sm font-medium mb-1 ${
                        openIndex === index ? 'text-purple-600' : 'text-gray-500'
                      }`}>
                        {faq?.category}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq?.question}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon 
                      name="ChevronDown" 
                      size={24} 
                      className={openIndex === index ? 'text-purple-600' : 'text-gray-400'} 
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pl-14">
                          <div className="prose prose-gray max-w-none">
                            {faq?.answer?.split('\n')?.map((paragraph, pIndex) => (
                              <p key={pIndex} className="text-gray-600 leading-relaxed mb-3 last:mb-0">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                          
                          {/* Video Explanation Placeholder */}
                          {index < 3 && (
                            <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <Icon name="Play" size={20} className="text-purple-600" />
                                <span className="text-sm font-medium text-purple-700">
                                  Watch video explanation (Coming soon)
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still Have Questions */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our support team is here to help you get started and succeed on our platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-white border border-purple-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-all duration-300">
                  <Icon name="MessageCircle" size={20} className="text-purple-600" />
                  <span className="font-medium text-purple-700">Live Chat</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-white border border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-300">
                  <Icon name="Mail" size={20} className="text-blue-600" />
                  <span className="font-medium text-blue-700">Email Support</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-white border border-green-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-all duration-300">
                  <Icon name="BookOpen" size={20} className="text-green-600" />
                  <span className="font-medium text-green-700">Help Center</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;