import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    product: [
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Success Stories', href: '#testimonials' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Help Center', href: '#help' },
      { name: 'Creator Guide', href: '#creator-guide' },
      { name: 'Brand Guide', href: '#brand-guide' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', href: '#twitter', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: 'Instagram', href: '#instagram', color: 'hover:text-pink-400' },
    { name: 'LinkedIn', icon: 'Linkedin', href: '#linkedin', color: 'hover:text-blue-600' },
    { name: 'YouTube', icon: 'Youtube', href: '#youtube', color: 'hover:text-red-500' },
    { name: 'TikTok', icon: 'Music', href: '#tiktok', color: 'hover:text-gray-800' },
    { name: 'Discord', icon: 'MessageSquare', href: '#discord', color: 'hover:text-indigo-500' }
  ];

  const contactInfo = [
    { icon: 'Mail', text: 'Hellofloovio@gmail.com', href: 'mailto:Hellofloovio@gmail.com' },
    { icon: 'Phone', text: '+91 9167406976', href: 'tel:+919167406976' },
    { icon: 'MapPin', text: 'Mumbai, India', href: '#location' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Floovio Marketplace</h3>
                  <p className="text-sm text-gray-400">Creator-Brand Platform</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                The only Floovio marketplace that guarantees on-time content delivery for brands while ensuring fair, prompt payment for creators through automated escrow and reputation systems.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo?.map((contact, index) => (
                  <motion.a
                    key={contact?.text}
                    href={contact?.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon name={contact?.icon} size={16} />
                    <span className="text-sm">{contact?.text}</span>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks?.map((social, index) => (
                  <motion.a
                    key={social?.name}
                    href={social?.href}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-200 ${social?.color} hover:bg-gray-700`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon name={social?.icon} size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
            {/* Product */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Product</h4>
              <ul className="space-y-3">
                {footerLinks?.product?.map((link, index) => (
                  <li key={link?.name}>
                    <a
                      href={link?.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks?.company?.map((link, index) => (
                  <li key={link?.name}>
                    <a
                      href={link?.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks?.resources?.map((link, index) => (
                  <li key={link?.name}>
                    <a
                      href={link?.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks?.legal?.map((link, index) => (
                  <li key={link?.name}>
                    <a
                      href={link?.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Get the latest updates on new features, creator success stories, and platform improvements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                />
                <button className="px-6 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© {currentYear} Floovio Marketplace. All rights reserved.</span>
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Icon name="Shield" size={14} className="text-green-400" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Lock" size={14} className="text-blue-400" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Award" size={14} className="text-yellow-400" />
                  <span>SOC 2 Certified</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Made with</span>
              <Icon name="Heart" size={14} className="text-red-400" />
              <span>for creators & brands</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;