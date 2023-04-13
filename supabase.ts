import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bfgwlprecphcnuzrfpje.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmZ3dscHJlY3BoY251enJmcGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1MDU1NDcsImV4cCI6MTk5NjA4MTU0N30.NL_nVBBQadG7Kd5J1oUXz1FWiARn4FdOa7zobpRVKuI";

export const supabase = createClient(supabaseUrl, supabaseKey);
