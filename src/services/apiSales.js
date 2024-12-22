import { getPagination } from "../utils/helpers";
import supabase from "./supabase";

export async function getSales({ page }) {
  let query = supabase
    .from("sales")
    .select("*", { count: "exact" })
    .order("date", { ascending: false });

  if (page && page !== -1) {
    const { from, to } = getPagination({ page });
    query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) throw new Error("Sales couldn't be found");

  return { data, count };
}

export async function createSale(newSale) {
  const { data: sales, error } = await supabase
    .from("sales")
    .insert([{ ...newSale }])
    .select();

  if (error) throw new Error("Sale couldn't be processed");

  return sales;
}
