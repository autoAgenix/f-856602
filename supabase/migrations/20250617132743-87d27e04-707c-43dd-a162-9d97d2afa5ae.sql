
-- Add new columns to the blogs table for enhanced features
ALTER TABLE public.blogs 
ADD COLUMN views INTEGER DEFAULT 0,
ADD COLUMN likes INTEGER DEFAULT 0,
ADD COLUMN shares INTEGER DEFAULT 0,
ADD COLUMN comments INTEGER DEFAULT 0,
ADD COLUMN table_of_contents JSONB;

-- Update existing blogs with some sample data for the new fields
UPDATE public.blogs SET 
  views = FLOOR(RANDOM() * 5000) + 500,
  likes = FLOOR(RANDOM() * 200) + 20,
  shares = FLOOR(RANDOM() * 50) + 5,
  comments = FLOOR(RANDOM() * 30) + 2,
  table_of_contents = '[
    {"id": "introduction", "title": "Introduction", "level": 2},
    {"id": "understanding", "title": "Understanding AI Automation", "level": 2},
    {"id": "benefits", "title": "Key Benefits", "level": 2},
    {"id": "applications", "title": "Real-World Applications", "level": 2},
    {"id": "future", "title": "The Road Ahead", "level": 2},
    {"id": "conclusion", "title": "Conclusion", "level": 2}
  ]'::jsonb
WHERE id IS NOT NULL;
