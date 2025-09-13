-- Database Schema for UGC Creator Brand Marketplace
-- Run this SQL in your Supabase SQL Editor

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    email TEXT,
    full_name TEXT,
    avatar_url TEXT,
    bio TEXT,
    website TEXT,
    location TEXT,
    -- Creator specific fields
    is_creator BOOLEAN DEFAULT FALSE,
    social_handles JSONB,
    platforms JSONB,
    follower_count INTEGER,
    niche TEXT,
    -- Brand specific fields
    is_brand BOOLEAN DEFAULT FALSE,
    company_name TEXT,
    position TEXT,
    industry TEXT,
    company_size TEXT,
    -- Additional metadata
    preferences JSONB,
    settings JSONB
);

-- Create form_submissions table
CREATE TABLE IF NOT EXISTS form_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    form_type TEXT NOT NULL CHECK (form_type IN ('creator', 'brand')),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    extra JSONB, -- Stores role-specific data
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    notes TEXT
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON user_profiles(email);
CREATE INDEX IF NOT EXISTS idx_user_profiles_is_creator ON user_profiles(is_creator);
CREATE INDEX IF NOT EXISTS idx_user_profiles_is_brand ON user_profiles(is_brand);
CREATE INDEX IF NOT EXISTS idx_form_submissions_form_type ON form_submissions(form_type);
CREATE INDEX IF NOT EXISTS idx_form_submissions_status ON form_submissions(status);
CREATE INDEX IF NOT EXISTS idx_form_submissions_created_at ON form_submissions(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_profiles
CREATE POLICY "Users can view their own profile" ON user_profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON user_profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON user_profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for form_submissions (public read/write for waitlist)
CREATE POLICY "Anyone can insert form submissions" ON form_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view form submissions" ON form_submissions
    FOR SELECT USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers
CREATE TRIGGER update_user_profiles_updated_at 
    BEFORE UPDATE ON user_profiles 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_form_submissions_updated_at 
    BEFORE UPDATE ON form_submissions 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data (optional)
-- You can remove this section if you don't want sample data
INSERT INTO form_submissions (form_type, name, email, extra, status) VALUES
('creator', 'John Doe', 'john@example.com', '{"socialHandle": "@johndoe", "platform": "instagram", "followers": "10k-50k", "niche": "fitness"}', 'pending'),
('brand', 'Jane Smith', 'jane@company.com', '{"company": "Tech Corp", "position": "Marketing Manager", "budget": "5k-10k", "contentType": "video", "industry": "technology"}', 'pending')
ON CONFLICT DO NOTHING;
