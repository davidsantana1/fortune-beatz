import i18next from "i18next";
import { getPagination } from "../utils/helpers";
import supabase from "./supabase";

export async function getLicenses({ page }) {
  let query = supabase.from("licenses").select("*", { count: "exact" });

  if (page) {
    const { from, to } = getPagination({ page, licenses: true });
    query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) throw new Error("Licenses couldn't be loaded");

  return { data, count };
}

export async function createLicense() {
  throw new Error(i18next.t("demoTitle"));
}

export async function updateLicense() {
  throw new Error(i18next.t("demoTitle"));
}

export async function deleteLicense() {
  throw new Error(i18next.t("demoTitle"));
}
