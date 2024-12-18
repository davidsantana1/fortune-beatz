import supabase, { supabaseUrl } from "./supabase";

export async function getBeats() {
  const { data, error } = await supabase.from("beats").select("*");

  if (error) throw new Error("Beats couldn't be loaded");

  return data;
}

export async function createEditBeat(newBeat, id) {
  const hasImagePath = newBeat.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newBeat.image.name}`.replaceAll(
    "/",
    "",
  );

  const imagePath = hasImagePath
    ? newBeat.image
    : `${supabaseUrl}/storage/v1/object/public/beat-images/${imageName}`;

  let query = supabase.from("beats");

  // A) CREATE
  if (!id) query = query.insert([{ ...newBeat, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newBeat, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) throw new Error("Beat couldn't be created");

  // 2. Upload the image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("beat-images")
    .upload(imageName, newBeat.image);

  console.log(storageError);

  // 3. Delete the beat if there was an error uploading the image
  if (storageError) {
    await supabase.from("beats").delete().eq("id", data.id);
    throw new Error(
      "Beat image could not be uploaded and the beat was not created",
    );
  }

  return data;
}

export async function deleteBeat(id) {
  const { error } = await supabase.from("beats").delete().eq("id", id);

  if (error) {
    throw new Error("Beat could not be deleted");
  }
}
