/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for public insert access (anyone can join waitlist)
    - Add policy for service role to read all waitlist entries
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into waitlist (public signup)
CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow service role to read all waitlist entries
CREATE POLICY "Service role can read waitlist"
  ON waitlist
  FOR SELECT
  TO service_role
  USING (true);