import supabase from "./supabase";

export async function getSales() {
  const { data: sales, error } = await supabase
    .from("sales")
    .select("*")
    .order("date", { ascending: false });

  if (error) throw new Error("Sales couldn't be found");

  return sales;
}

export async function createSale(newSale) {
  const { data: sales, error } = await supabase
    .from("sales")
    .insert([{ ...newSale }])
    .select();

  if (error) throw new Error("Sale couldn't be processed");

  return sales;
}
