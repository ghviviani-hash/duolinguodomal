// lib/supabase-client.ts
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase' // Vamos criar este tipo a seguir

export const supabase = createPagesBrowserClient<Database>()