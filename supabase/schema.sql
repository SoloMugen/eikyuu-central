-- Enable Vector for Semantic Clustering
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tier-based Source Authority
CREATE TYPE source_tier AS ENUM ('Tier 1', 'Tier 2', 'Tier 3', 'Social');

CREATE TABLE sources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  base_url TEXT UNIQUE,
  tier source_tier DEFAULT 'Tier 3',
  authority_score FLOAT DEFAULT 0.5,
  last_scraped TIMESTAMP WITH TIME ZONE
);

-- The Synthesized Article (What the user sees)
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  url TEXT UNIQUE,
  slug TEXT,
  summary_bullets JSONB, -- The "10-Second Truth"
  summary TEXT, -- Short summary for cards
  content_markdown TEXT,  -- The "Deep Dive"
  content TEXT, -- Full content fallback
  legitimacy_score INT CHECK (legitimacy_score <= 100),
  legitimacy_analysis TEXT,
  category TEXT,
  sub_category TEXT,
  image_url TEXT,
  image_prompt TEXT,
  source TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  embedding VECTOR(1536), -- For Semantic Clustering/Recommendations
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Atomic Facts (Evidence Tracking)
CREATE TABLE claims (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  article_id UUID REFERENCES articles(id),
  claim_text TEXT,
  evidence_url TEXT, -- Link to Wayback Machine Archive
  is_verified BOOLEAN DEFAULT FALSE
);
