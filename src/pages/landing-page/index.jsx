import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Import all components
import Header from '../../components/Header';
import HeroSection from './components/HeroSection';
import ProblemStatement from './components/ProblemStatement';
import SolutionJourney from './components/SolutionJourney';
import SocialProofCarousel from './components/SocialProofCarousel';
import FeaturesGrid from './components/FeaturesGrid';
import GamificationTeaser from './components/GamificationTeaser';
import WaitlistForm from './components/WaitlistForm';
import TrustBadges from './components/TrustBadges';
import SuccessMetrics from './components/SuccessMetrics';
import FAQAccordion from './components/FAQAccordion';
import StickyFinalCTA from './components/StickyFinalCTA';
import Footer from './components/Footer';

const LandingPage = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const heroSectionRef = useRef(null);

  const handleJoinAsCreator = () => {
    setSelectedRole('creator');
    setIsWaitlistOpen(true);
  };

  const handleJoinAsBrand = () => {
    setSelectedRole('brand');
    setIsWaitlistOpen(true);
  };

  const closeWaitlist = () => {
    setIsWaitlistOpen(false);
    setSelectedRole(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>UGCBox - Creator Marketplace | Get Paid On Time, Content Delivered Guaranteed</title>
        <meta name="description" content="UGCBox is the only UGC marketplace that guarantees on-time content delivery for brands while ensuring fair, prompt payment for creators through automated escrow and reputation systems." />
        <meta name="keywords" content="UGC, user generated content, creator marketplace, brand collaboration, content creation, influencer marketing, UGCBox" />
        <meta property="og:title" content="UGCBox - Creator-Brand Platform" />
        <meta property="og:description" content="Join thousands of creators and brands building successful partnerships with guaranteed payments and on-time delivery." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UGCBox - Get Paid On Time" />
        <meta name="twitter:description" content="The only UGC marketplace with payment protection and delivery guarantees." />
      </Helmet>
      
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection 
        ref={heroSectionRef}
        onJoinAsCreator={handleJoinAsCreator}
        onJoinAsBrand={handleJoinAsBrand}
      />
      {/* Problem Statement */}
      <div id="features">
        <ProblemStatement />
      </div>
      {/* Solution Journey */}
      <div id="how-it-works">
        <SolutionJourney />
      </div>
      {/* Social Proof*/}
      <div id="testimonials">
        <SocialProofCarousel />
      </div>
      {/* Features Grid */}
      <FeaturesGrid />
      {/* Success Metrics */}
      <SuccessMetrics />
      {/* Gamification Teaser */}
      <GamificationTeaser />
      {/* Trust Badges */}
      <TrustBadges />
      {/* FAQ Section */}
      <div id="faq">
        <FAQAccordion />
      </div>
      {/* Footer */}
      <Footer />
      {/* Sticky Final CTA */}
      <StickyFinalCTA 
        heroSectionRef={heroSectionRef}
        onJoinAsCreator={handleJoinAsCreator}
        onJoinAsBrand={handleJoinAsBrand}
      />
      {/* Waitlist Modal */}
      <div id="waitlist">
        <WaitlistForm 
          isOpen={isWaitlistOpen}
          onClose={closeWaitlist}
          initialRole={selectedRole}
        />
      </div>
      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-24 right-6 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
};

export default LandingPage;