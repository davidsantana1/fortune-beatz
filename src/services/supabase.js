import { createClient } from "@supabase/supabase-js";
import { SUPABASE } from "../utils/constants";

export const supabaseUrl = "https://biecywxhiqjkwvqtvikk.supabase.co";
const supabaseKey = SUPABASE;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
