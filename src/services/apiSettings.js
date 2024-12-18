import supabase from "./supabase";

export async function getSettings() {
  const { data: settings, error } = await supabase
    .from("settings")
    .select("*")
    .single();

  if (error) throw new Error("Settings couldn't be loaded");

  return settings;
}

export async function updateSettings(newSettings) {
  const {
    basicLicensePrice,
    premiumLicensePrice,
    exclusiveLicensePrice,
    customLicensePrice,
  } = newSettings;

  const { data: settings, error } = await supabase
    .from("settings")
    .update({
      basicLicensePrice,
      premiumLicensePrice,
      exclusiveLicensePrice,
      customLicensePrice,
    })
    .eq("id", 1)
    .single();

  if (error) throw new Error("Settings couldn't be updated");

  return settings;
}
