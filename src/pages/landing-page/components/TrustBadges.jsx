import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TrustBadges = () => {
  // Temporary flag to hide this section
  const shouldHideSection = true;

  if (shouldHideSection) {
    return null;
  }

  const securityBadges = [
    {
      icon: 'Shield',
      title: 'SSL Encrypted',
      description: '256-bit encryption',
      color: 'green'
    },
    {
      icon: 'Lock',
      title: 'Payment Secure',
      description: 'PCI DSS Compliant',
      color: 'blue'
    },
    {
      icon: 'CheckCircle',
      title: 'GDPR Compliant',
      description: 'Data protection',
      color: 'purple'
    },
    {
      icon: 'Award',
      title: 'Business Verified',
      description: 'Registered entity',
      color: 'yellow'
    }
  ];

  const complianceBadges = [
    {
      name: 'SOC 2 Type II',
      logo: 'https://via.placeholder.com/80x60/6366F1/FFFFFF?text=SOC2',
      description: 'Security & availability'
    },
    {
      name: 'ISO 27001',
      logo: 'https://via.placeholder.com/80x60/10B981/FFFFFF?text=ISO',
      description: 'Information security'
    },
    {
      name: 'CCPA Ready',
      logo: 'https://via.placeholder.com/80x60/EC4899/FFFFFF?text=CCPA',
      description: 'Privacy compliance'
    },
    {
      name: 'COPPA Safe',
      logo: 'https://via.placeholder.com/80x60/F59E0B/FFFFFF?text=COPPA',
      description: 'Child protection'
    }
  ];

  const partnerBadges = [
    {
      name: 'Stripe',
      logo: 'https://via.placeholder.com/100x40/635BFF/FFFFFF?text=Stripe',
      type: 'Payment Partner'
    },
    {
      name: 'AWS',
      logo: 'https://via.placeholder.com/100x40/FF9900/FFFFFF?text=AWS',
      type: 'Cloud Partner'
    },
    {
      name: 'Twilio',
      logo: 'https://via.placeholder.com/100x40/F22F46/FFFFFF?text=Twilio',
      type: 'Communication Partner'
    },
    {
      name: 'SendGrid',
      logo: 'https://via.placeholder.com/100x40/1A82E2/FFFFFF?text=SendGrid',
      type: 'Email Partner'
    }
  ];

  const stats = [
    {
      value: '99.9%',
      label: 'Uptime',
      icon: 'Activity',
      color: 'green'
    },
    {
      value: '24/7',
      label: 'Support',
      icon: 'Headphones',
      color: 'blue'
    },
    {
      value: '2FA',
      label: 'Security',
      icon: 'Smartphone',
      color: 'purple'
    },
    {
      value: '0',
      label: 'Data Breaches',
      icon: 'ShieldCheck',
      color: 'green'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Your Trust is Our <span className="text-green-600">Priority</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We maintain the highest standards of security, compliance, and reliability
          </motion.p>
        </div>

        {/* Security Badges */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {securityBadges?.map((badge, index) => (
            <motion.div
              key={badge?.title}
              className="bg-white rounded-xl p-6 shadow-lg border text-center hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${
                badge?.color === 'green' ? 'bg-green-100' :
                badge?.color === 'blue' ? 'bg-blue-100' :
                badge?.color === 'purple'? 'bg-purple-100' : 'bg-yellow-100'
              }`}>
                <Icon 
                  name={badge?.icon} 
                  size={24} 
                  className={
                    badge?.color === 'green' ? 'text-green-600' :
                    badge?.color === 'blue' ? 'text-blue-600' :
                    badge?.color === 'purple'? 'text-purple-600' : 'text-yellow-600'
                  } 
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{badge?.title}</h3>
              <p className="text-sm text-gray-600">{badge?.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg border mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8">
            {stats?.map((stat, index) => (
              <motion.div
                key={stat?.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  stat?.color === 'green' ? 'bg-green-100' :
                  stat?.color === 'blue'? 'bg-blue-100' : 'bg-purple-100'
                }`}>
                  <Icon 
                    name={stat?.icon} 
                    size={28} 
                    className={
                      stat?.color === 'green' ? 'text-green-600' :
                      stat?.color === 'blue'? 'text-blue-600' : 'text-purple-600'
                    } 
                  />
                </div>
                <div className={`text-3xl font-bold mb-2 ${
                  stat?.color === 'green' ? 'text-green-600' :
                  stat?.color === 'blue'? 'text-blue-600' : 'text-purple-600'
                }`}>
                  {stat?.value}
                </div>
                <div className="text-gray-600 font-medium">{stat?.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Compliance Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Compliance & Certifications
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {complianceBadges?.map((badge, index) => (
                <motion.div
                  key={badge?.name}
                  className="bg-white rounded-lg p-4 shadow-md border text-center hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={badge?.logo}
                    alt={badge?.name}
                    className="h-12 mx-auto mb-3 object-contain"
                  />
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{badge?.name}</h4>
                  <p className="text-xs text-gray-600">{badge?.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partner Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Trusted Partners
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {partnerBadges?.map((partner, index) => (
                <motion.div
                  key={partner?.name}
                  className="bg-white rounded-lg p-4 shadow-md border text-center hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={partner?.logo}
                    alt={partner?.name}
                    className="h-8 mx-auto mb-3 object-contain"
                  />
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{partner?.name}</h4>
                  <p className="text-xs text-gray-600">{partner?.type}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Icon name="ShieldCheck" size={32} className="text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">
                Your Data is Safe With Us
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We employ bank-level security measures, regular security audits, and maintain 
              strict data privacy policies. Your personal information and payment details 
              are encrypted and never shared with third parties.
            </p>
            <div className="flex items-center justify-center mt-4 space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Icon name="Lock" size={16} className="mr-1" />
                <span>End-to-end encrypted</span>
              </div>
              <div className="flex items-center">
                <Icon name="Eye" size={16} className="mr-1" />
                <span>Privacy by design</span>
              </div>
              <div className="flex items-center">
                <Icon name="Trash2" size={16} className="mr-1" />
                <span>Right to deletion</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;