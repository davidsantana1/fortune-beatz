import i18next from "i18next";
import { getPagination } from "../utils/helpers";
import supabase from "./supabase";

export async function getBeats({ page }) {
  let query = supabase.from("beats").select("*", { count: "exact" });

  if (page && page !== -1) {
    const { from, to } = getPagination({ page });
    query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) throw new Error("Beats couldn't be loaded");

  return { data, count };
}

export async function createEditBeat() {
  throw new Error(i18next.t("demoTitle"));
}

export async function deleteBeat() {
  throw new Error(i18next.t("demoTitle"));
}
