/*
  # Initial Schema Setup

  1. New Tables
    - users
      - id (uuid, primary key)
      - name (text)
      - email (text, unique)
      - role (text)
      - created_at (timestamp)
    - news
      - id (uuid, primary key)
      - title (text)
      - summary (text)
      - content (text)
      - category (text)
      - image (text)
      - date (timestamp)
      - created_at (timestamp)
    - careers
      - id (uuid, primary key)
      - title (text)
      - category (text)
      - eligibility (text)
      - apply_by (timestamp)
      - location (text)
      - description (text)
      - image (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create tables
CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  summary text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  image text NOT NULL,
  date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS careers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  eligibility text NOT NULL,
  apply_by timestamptz NOT NULL,
  location text NOT NULL,
  description text NOT NULL,
  image text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE careers ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to news"
  ON news
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage news"
  ON news
  FOR ALL
  TO authenticated
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow public read access to careers"
  ON careers
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage careers"
  ON careers
  FOR ALL
  TO authenticated
  USING (auth.role() = 'authenticated');