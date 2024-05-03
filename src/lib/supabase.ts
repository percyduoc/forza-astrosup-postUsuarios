import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY,
  {
    auth: {
      flowType: "pkce",
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: true,
    }
  }
)

// import { createClient } from '@supabase/supabase-js';

// const options = {
//   db: {
//     schema: 'public',
//   },
//   auth: {
//     autoRefreshToken: true,
//     persistSession: true,
//     detectSessionInUrl: true,
//     flowType: 'pkce'
//   },
//   global: {
//     headers: { 'x-my-custom-header': 'Forza' },
//   },
// }
// export const supabase = createClient("https://frvqiseepqvkwojmmjnz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydnFpc2VlcHF2a3dvam1tam56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyMzQwNzgsImV4cCI6MjAyOTgxMDA3OH0.2aPCnQMHZWUoZqT_Voloc9B7yOSUiYK17kpJ8pr67Yk", options)

// export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY, options);