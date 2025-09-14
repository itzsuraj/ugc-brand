import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SuccessMetrics = () => {
  // Temporary flag to hide this section
  const shouldHideSection = true;

  if (shouldHideSection) {
    return null;
  }

  const [counters, setCounters] = useState({
    creators: 0,
    brands: 0,
    projects: 0,
    earnings: 0
  });

  const targetValues = {
    creators: 2847,
    brands: 156,
    projects: 1243,
    earnings: 847000
  };

  const locations = [
    { city: 'New York', count: 342, lat: 40.7128, lng: -74.0060 },
    { city: 'Los Angeles', count: 289, lat: 34.0522, lng: -118.2437 },
    { city: 'London', count: 234, lat: 51.5074, lng: -0.1278 },
    { city: 'Toronto', count: 198, lat: 43.6532, lng: -79.3832 },
    { city: 'Sydney', count: 167, lat: -33.8688, lng: 151.2093 },
    { city: 'Berlin', count: 145, lat: 52.5200, lng: 13.4050 },
    { city: 'Tokyo', count: 123, lat: 35.6762, lng: 139.6503 },
    { city: 'Mumbai', count: 98, lat: 19.0760, lng: 72.8777 }
  ];

  const recentSignups = [
    { name: 'Sarah M.', location: 'New York', type: 'creator', time: '2 min ago', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' },
    { name: 'TechCorp', location: 'San Francisco', type: 'brand', time: '5 min ago', avatar: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=40&h=40&fit=crop' },
    { name: 'Marcus R.', location: 'London', type: 'creator', time: '8 min ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
    { name: 'FashionBrand', location: 'Paris', type: 'brand', time: '12 min ago', avatar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=40&h=40&fit=crop' },
    { name: 'Emma K.', location: 'Toronto', type: 'creator', time: '15 min ago', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounters({
          creators: Math.floor(targetValues?.creators * easeOutQuart),
          brands: Math.floor(targetValues?.brands * easeOutQuart),
          projects: Math.floor(targetValues?.projects * easeOutQuart),
          earnings: Math.floor(targetValues?.earnings * easeOutQuart)
        });

        if (step >= steps) {
          clearInterval(interval);
          setCounters(targetValues);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000)?.toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000)?.toFixed(1) + 'K';
    }
    return num?.toLocaleString();
  };

  const formatCurrency = (num) => {
    if (num >= 1000000) {
      return '$' + (num / 1000000)?.toFixed(1) + 'M';
    } else if (num >= 1000) {
      return '$' + (num / 1000)?.toFixed(0) + 'K';
    }
    return '$' + num?.toLocaleString();
  };

  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Growing <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Community</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of creators and brands who are already part of our marketplace
          </motion.p>
        </div>

        {/* Main Metrics */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border text-center hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={28} className="text-purple-600" />
            </div>
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {formatNumber(counters?.creators)}
            </div>
            <div className="text-gray-600 font-medium">Creators Joined</div>
            <div className="text-sm text-green-600 mt-2 flex items-center justify-center">
              <Icon name="TrendingUp" size={16} className="mr-1" />
              +12% this week
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border text-center hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Building2" size={28} className="text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {counters?.brands?.toLocaleString()}
            </div>
            <div className="text-gray-600 font-medium">Brands Active</div>
            <div className="text-sm text-green-600 mt-2 flex items-center justify-center">
              <Icon name="TrendingUp" size={16} className="mr-1" />
              +8% this week
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border text-center hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={28} className="text-green-600" />
            </div>
            <div className="text-4xl font-bold text-green-600 mb-2">
              {formatNumber(counters?.projects)}
            </div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
            <div className="text-sm text-green-600 mt-2 flex items-center justify-center">
              <Icon name="TrendingUp" size={16} className="mr-1" />
              +15% this week
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border text-center hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="DollarSign" size={28} className="text-yellow-600" />
            </div>
            <div className="text-4xl font-bold text-yellow-600 mb-2">
              {formatCurrency(counters?.earnings)}
            </div>
            <div className="text-gray-600 font-medium">Creator Earnings</div>
            <div className="text-sm text-green-600 mt-2 flex items-center justify-center">
              <Icon name="TrendingUp" size={16} className="mr-1" />
              +23% this week
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Geographic Distribution */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl border"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Icon name="Globe" size={24} className="mr-3 text-blue-600" />
              Global Reach
            </h3>
            
            {/* World Map Placeholder */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 mb-6 relative overflow-hidden">
              <div className="text-center py-8">
                <Icon name="MapPin" size={48} className="text-blue-400 mx-auto mb-4" />
                <p className="text-gray-600">Creators from 50+ countries</p>
              </div>
              
            </div>

            {/* Top Locations */}
            <div className="space-y-3">
              {locations?.slice(0, 5)?.map((location, index) => (
                <motion.div
                  key={location?.city}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-900">{location?.city}</span>
                  </div>
                  <span className="text-gray-600">{location?.count} creators</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl border"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Icon name="Activity" size={24} className="mr-3 text-green-600" />
              Recent Signups
            </h3>

            <div className="space-y-4">
              {recentSignups?.map((signup, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={signup?.avatar}
                    alt={signup?.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{signup?.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        signup?.type === 'creator' ?'bg-purple-100 text-purple-700' :'bg-blue-100 text-blue-700'
                      }`}>
                        {signup?.type}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {signup?.location} • {signup?.time}
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Be Part of This Growing Community
            </h3>
            <p className="mb-6 opacity-90">
              Join {formatNumber(counters?.creators)} creators and {counters?.brands} brands who are already building successful partnerships
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Users" size={24} />
              <span className="font-semibold">Your spot is waiting</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessMetrics;