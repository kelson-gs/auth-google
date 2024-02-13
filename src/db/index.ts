import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = `https://xrfahrqkvtxidwtroljg.supabase.co`;
const supabaseKey: string = process.env.SUPABASE_KEY ?? "";
const supabase = createClient(supabaseUrl, supabaseKey, {auth: {
  persistSession: true  
}})

export {supabase};