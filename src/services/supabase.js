import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://oxmmwbalpkbymrzkjisz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94bW13YmFscGtieW1yemtqaXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5NjMwMjUsImV4cCI6MjAyNDUzOTAyNX0.V9Ws_DEiTF029UuAq-tiPJhyndSn5gBxorlR8_F2NkU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
