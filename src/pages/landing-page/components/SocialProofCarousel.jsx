import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProofCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      type: 'creator',
      name: 'Sarah Chen',
      role: 'Lifestyle Creator',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'Finally, a platform where I get paid on time! Made ₹2.3L last month with zero payment delays.',
      earnings: '₹2.3L',
      period: 'last month',
      verified: true
    },
    {
      type: 'brand',
      name: 'TechCorp Marketing',
      role: 'Marketing Director',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Got 15 high-quality videos in just 3 days. The quality control and timeline management is incredible.',
      metric: '15 videos',
      period: '3 days',
      verified: true
    },
    {
      type: 'creator',
      name: 'Marcus Rodriguez',
      role: 'Tech Reviewer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'The escrow system gives me confidence. No more chasing brands for payments - it\'s all automated.',
      earnings: '₹3.4L',
      period: 'this quarter',
      verified: true
    },
    {
      type: 'brand',
      name: 'FashionForward',
      role: 'Brand Manager',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'The quality of creators here is outstanding. Every campaign delivered on time with amazing results.',
      metric: '250% ROI',
      period: 'average campaign',
      verified: true
    }
  ];

  const brandLogos = [
    { name: 'TechCorp', logo: 'https://via.placeholder.com/120x60/6366F1/FFFFFF?text=TechCorp' },
    { name: 'BrandX', logo: 'https://via.placeholder.com/120x60/EC4899/FFFFFF?text=BrandX' },
    { name: 'FashionForward', logo: 'https://via.placeholder.com/120x60/10B981/FFFFFF?text=Fashion' },
    { name: 'StartupY', logo: 'https://via.placeholder.com/120x60/F59E0B/FFFFFF?text=StartupY' },
    { name: 'GlobalBrand', logo: 'https://via.placeholder.com/120x60/8B5CF6/FFFFFF?text=Global' },
    { name: 'InnovateCo', logo: 'https://via.placeholder.com/120x60/06B6D4/FFFFFF?text=Innovate' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Trusted by <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Creators</span> & <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Brands</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See what our community is saying about their experience
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-white rounded-2xl p-8 shadow-xl border"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-5 md:space-y-0 md:space-x-8">
                  {/* Avatar and Info */}
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className="relative">
                      <Image
                        src={testimonials?.[currentIndex]?.avatar}
                        alt={testimonials?.[currentIndex]?.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto md:mx-0 object-cover"
                      />
                      {testimonials?.[currentIndex]?.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Icon name="Check" size={12} className="text-white" />
                        </div>
                      )}
                    </div>
                    <h4 className="font-bold text-gray-900 mt-3">{testimonials?.[currentIndex]?.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonials?.[currentIndex]?.role}</p>
                    
                    {/* Metrics */}
                    <div className={`mt-3 sm:mt-4 p-3 rounded-lg ${
                      testimonials?.[currentIndex]?.type === 'creator' ?'bg-gradient-to-r from-purple-50 to-pink-50' :'bg-gradient-to-r from-blue-50 to-blue-100'
                    }`}>
                      <div className={`text-xl sm:text-2xl font-bold ${
                        testimonials?.[currentIndex]?.type === 'creator' ? 'text-purple-600' : 'text-blue-600'
                      }`}>
                        {testimonials?.[currentIndex]?.earnings || testimonials?.[currentIndex]?.metric}
                      </div>
                      <div className="text-xs text-gray-600">{testimonials?.[currentIndex]?.period}</div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1">
                    <div className="flex mb-4">
                      {[...Array(5)]?.map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      "{testimonials?.[currentIndex]?.content}"
                    </blockquote>
                    
                    {/* Type Badge */}
                    <div className={`inline-flex items-center mt-4 px-3 py-1 rounded-full text-sm font-medium ${
                      testimonials?.[currentIndex]?.type === 'creator' ?'bg-purple-100 text-purple-700' :'bg-blue-100 text-blue-700'
                    }`}>
                      <Icon 
                        name={testimonials?.[currentIndex]?.type === 'creator' ? 'Users' : 'Building2'} 
                        size={16} 
                        className="mr-1" 
                      />
                      {testimonials?.[currentIndex]?.type === 'creator' ? 'Creator' : 'Brand'}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="hidden sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border items-center justify-center hover:shadow-xl transition-all duration-300"
            >
              <Icon name="ChevronLeft" size={20} className="text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border items-center justify-center hover:shadow-xl transition-all duration-300"
            >
              <Icon name="ChevronRight" size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProofCarousel;