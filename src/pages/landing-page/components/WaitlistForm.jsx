import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';
import { supabase } from '../../../lib/supabase';

const WaitlistForm = ({ isOpen, onClose, initialRole = null }) => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState(initialRole || '');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    // Creator fields
    socialHandle: '',
    platform: '',
    followers: '',
    niche: '',
    // Brand fields
    company: '',
    position: '',
    budget: '',
    contentType: '',
    industry: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Reset form state when modal opens/closes
  React.useEffect(() => {
    if (isOpen) {
      // Reset form when opening
      setStep(1);
      setRole(initialRole || '');
      setFormData({
        email: '',
        name: '',
        socialHandle: '',
        platform: '',
        followers: '',
        niche: '',
        company: '',
        position: '',
        budget: '',
        contentType: '',
        industry: ''
      });
      setIsSubmitting(false);
      setIsSuccess(false);
      setErrors({});
    }
  }, [isOpen, initialRole]);

  const platformOptions = [
    { value: 'instagram', label: 'Instagram' },
    { value: 'tiktok', label: 'TikTok' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'twitter', label: 'Twitter/X' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'other', label: 'Other' }
  ];

  const followerOptions = [
    { value: '1k-10k', label: '1K - 10K' },
    { value: '10k-50k', label: '10K - 50K' },
    { value: '50k-100k', label: '50K - 100K' },
    { value: '100k-500k', label: '100K - 500K' },
    { value: '500k+', label: '500K+' }
  ];

  const nicheOptions = [
    { value: 'lifestyle', label: 'Lifestyle' },
    { value: 'fashion', label: 'Fashion & Beauty' },
    { value: 'tech', label: 'Technology' },
    { value: 'fitness', label: 'Fitness & Health' },
    { value: 'food', label: 'Food & Cooking' },
    { value: 'travel', label: 'Travel' },
    { value: 'business', label: 'Business' },
    { value: 'other', label: 'Other' }
  ];

  const budgetOptions = [
    { value: '1k-5k', label: '₹80K - ₹4L per month' },
    { value: '5k-15k', label: '₹4L - ₹12L per month' },
    { value: '15k-50k', label: '₹12L - ₹40L per month' },
    { value: '50k+', label: '₹40L+ per month' }
  ];

  const contentTypeOptions = [
    { value: 'video', label: 'Video Content' },
    { value: 'photo', label: 'Photo Content' },
    { value: 'stories', label: 'Stories & Reels' },
    { value: 'blog', label: 'Blog Posts' },
    { value: 'mixed', label: 'Mixed Content' }
  ];

  const industryOptions = [
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'saas', label: 'SaaS/Technology' },
    { value: 'fashion', label: 'Fashion & Beauty' },
    { value: 'health', label: 'Health & Wellness' },
    { value: 'finance', label: 'Finance' },
    { value: 'education', label: 'Education' },
    { value: 'other', label: 'Other' }
  ];

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData?.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Invalid email format';
      if (!formData?.name) newErrors.name = 'Name is required';
    }

    if (currentStep === 2 && role === 'creator') {
      if (!formData?.socialHandle) newErrors.socialHandle = 'Social handle is required';
      if (!formData?.platform) newErrors.platform = 'Platform is required';
      if (!formData?.followers) newErrors.followers = 'Follower count is required';
      if (!formData?.niche) newErrors.niche = 'Niche is required';
    }

    if (currentStep === 2 && role === 'brand') {
      if (!formData?.company) newErrors.company = 'Company name is required';
      if (!formData?.position) newErrors.position = 'Position is required';
      if (!formData?.budget) newErrors.budget = 'Budget range is required';
      if (!formData?.contentType) newErrors.contentType = 'Content type is required';
      if (!formData?.industry) newErrors.industry = 'Industry is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!validateStep(step)) return;

    setIsSubmitting(true);
    
    try {
      // Prepare the data for Supabase
      const submissionData = {
        form_type: role,
        name: formData.name,
        email: formData.email,
        extra: role === 'creator' ? {
          socialHandle: formData.socialHandle,
          platform: formData.platform,
          followers: formData.followers,
          niche: formData.niche
        } : {
          company: formData.company,
          position: formData.position,
          budget: formData.budget,
          contentType: formData.contentType,
          industry: formData.industry
        }
      };

      // Save to Supabase
      const { data, error } = await supabase
        .from('form_submissions')
        .insert([submissionData]);

      if (error) {
        console.error('Error saving form data:', error);
        // You could show an error message to the user here
        alert('There was an error submitting the form. Please try again.');
        setIsSubmitting(false);
        return;
      }

      console.log('Form data saved successfully:', data);
      setIsSuccess(true);
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {isSuccess ? 'Welcome Aboard!' : 'Join the Waitlist'}
            </h2>
            {!isSuccess && (
              <p className="text-gray-600 text-sm mt-1">
                Step {step} of {role ? 2 : 1}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          >
            <Icon name="X" size={16} className="text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                className="text-center py-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  You're In!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thanks for joining our waitlist. We'll notify you as soon as we launch!
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>What's next?</strong> Keep an eye on your inbox for exclusive updates, 
                    early access invites, and special perks for early adopters.
                  </p>
                </div>
                <Button
                  variant="default"
                  onClick={onClose}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Got it!
                </Button>
              </motion.div>
            ) : step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Let's get started
                    </h3>
                    
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="your@email.com"
                      value={formData?.email}
                      onChange={(e) => handleInputChange('email', e?.target?.value)}
                      error={errors?.email}
                      required
                      className="mb-4"
                    />
                    
                    <Input
                      label="Full Name"
                      type="text"
                      placeholder="Your full name"
                      value={formData?.name}
                      onChange={(e) => handleInputChange('name', e?.target?.value)}
                      error={errors?.name}
                      required
                      className="mb-6"
                    />
                  </div>

                  {!role && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">I am a:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setRole('creator')}
                          className="p-4 border-2 border-purple-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 text-left"
                        >
                          <Icon name="Users" size={20} className="text-purple-600 mb-2" />
                          <div className="font-medium text-gray-900">Creator</div>
                          <div className="text-sm text-gray-600">I create content</div>
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => setRole('brand')}
                          className="p-4 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 text-left"
                        >
                          <Icon name="Building2" size={20} className="text-blue-600 mb-2" />
                          <div className="font-medium text-gray-900">Brand</div>
                          <div className="text-sm text-gray-600">I need content</div>
                        </button>
                      </div>
                    </div>
                  )}

                  <Button
                    variant="default"
                    onClick={handleNext}
                    disabled={!formData?.email || !formData?.name || !role}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Tell us more about {role === 'creator' ? 'your content' : 'your needs'}
                    </h3>

                    {role === 'creator' ? (
                      <div className="space-y-4">
                        <Input
                          label="Social Media Handle"
                          type="text"
                          placeholder="@yourusername"
                          value={formData?.socialHandle}
                          onChange={(e) => handleInputChange('socialHandle', e?.target?.value)}
                          error={errors?.socialHandle}
                          required
                        />
                        
                        <Select
                          label="Primary Platform"
                          options={platformOptions}
                          value={formData?.platform}
                          onChange={(value) => handleInputChange('platform', value)}
                          error={errors?.platform}
                          required
                        />
                        
                        <Select
                          label="Follower Count"
                          options={followerOptions}
                          value={formData?.followers}
                          onChange={(value) => handleInputChange('followers', value)}
                          error={errors?.followers}
                          required
                        />
                        
                        <Select
                          label="Content Niche"
                          options={nicheOptions}
                          value={formData?.niche}
                          onChange={(value) => handleInputChange('niche', value)}
                          error={errors?.niche}
                          required
                        />
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Input
                          label="Company Name"
                          type="text"
                          placeholder="Your company"
                          value={formData?.company}
                          onChange={(e) => handleInputChange('company', e?.target?.value)}
                          error={errors?.company}
                          required
                        />
                        
                        <Input
                          label="Your Position"
                          type="text"
                          placeholder="Marketing Manager"
                          value={formData?.position}
                          onChange={(e) => handleInputChange('position', e?.target?.value)}
                          error={errors?.position}
                          required
                        />
                        
                        <Select
                          label="Monthly Budget"
                          options={budgetOptions}
                          value={formData?.budget}
                          onChange={(value) => handleInputChange('budget', value)}
                          error={errors?.budget}
                          required
                        />
                        
                        <Select
                          label="Content Type Needed"
                          options={contentTypeOptions}
                          value={formData?.contentType}
                          onChange={(value) => handleInputChange('contentType', value)}
                          error={errors?.contentType}
                          required
                        />
                        
                        <Select
                          label="Industry"
                          options={industryOptions}
                          value={formData?.industry}
                          onChange={(value) => handleInputChange('industry', value)}
                          error={errors?.industry}
                          required
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="flex-1"
                      iconName="ArrowLeft"
                      iconPosition="left"
                    >
                      Back
                    </Button>
                    
                    <Button
                      type="submit"
                      variant="default"
                      loading={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      iconName="Check"
                      iconPosition="right"
                    >
                      {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default WaitlistForm;