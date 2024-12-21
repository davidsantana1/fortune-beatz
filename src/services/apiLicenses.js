import supabase from "./supabase";

export async function getLicenses() {
  const { data: licenses, error } = await supabase.from("licenses").select("*");

  if (error) throw new Error("Licenses couldn't be loaded");

  return licenses;
}

export async function createLicense(newLicense) {
  newLicense.forProfitLivePerformance =
    newLicense.forProfitLivePerformance === "yes" ? true : false;

  const { data: license, error } = await supabase
    .from("licenses")
    .insert([{ ...newLicense }])
    .select();

  if (error?.code === "23505")
    throw new Error(
      "A license with this name already exists. Please choose a different name.",
    );
  if (error) throw new Error("License couldn't be created");

  return license;
}

export async function updateLicense(newLicense, id) {
  newLicense.forProfitLivePerformance =
    newLicense.forProfitLivePerformance === "yes" ? true : false;

  const { data: license, error } = await supabase
    .from("licenses")
    .update({ ...newLicense })
    .eq("id", id)
    .select();

  if (error) throw new Error("License couldn't be updated");

  return license;
}

export async function deleteLicense(id) {
  const { error } = await supabase.from("licenses").delete().eq("id", id);

  if (error) throw new Error("License couldn't be deleted");
}
