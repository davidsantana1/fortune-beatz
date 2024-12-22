import supabase, { supabaseUrl } from "./supabase";

export async function getBeats() {
  const { data, error } = await supabase.from("beats").select("*");

  if (error) throw new Error("Beats couldn't be loaded");

  return data;
}

export async function createEditBeat(newBeat, id) {
  // Image
  const hasImagePath = newBeat.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newBeat.image.name}`.replaceAll(
    "/",
    "",
  );

  const imagePath = hasImagePath
    ? newBeat.image
    : `${supabaseUrl}/storage/v1/object/public/beat-images/${imageName}`;

  // Audio
  const hasAudioPath = newBeat.audio?.startsWith?.(supabaseUrl);

  const audioName = `${Math.random()}-${newBeat.name}`
    .replaceAll(" ", "")
    .replaceAll("/", "");

  const audioPath = hasAudioPath
    ? newBeat.audio
    : `${supabaseUrl}/storage/v1/object/public/beat-audios/${audioName}`;

  let query = supabase.from("beats");

  // A) CREATE
  if (!id)
    query = query.insert([{ ...newBeat, image: imagePath, audio: audioPath }]);

  // B) EDIT
  if (id)
    query = query
      .update({
        ...newBeat,
        image: imagePath,
        audio: audioPath,
      })
      .eq("id", id);

  const { data, error } = await query.select().single();

  if (error) throw new Error("Beat couldn't be created");

  // 2. Upload the image
  const { error: storageError } = await supabase.storage
    .from("beat-images")
    .upload(imageName, newBeat.image);

  // 2. Upload the audio
  const { error: storageAudioError } = await supabase.storage
    .from("beat-audios")
    .upload(audioName, newBeat.audio);

  if (hasAudioPath && hasImagePath) return data;

  // 3. Delete the beat if there was an error uploading the image
  if (storageError) {
    await supabase.from("beats").delete().eq("id", data.id);
    throw new Error(
      "Beat image could not be uploaded and the beat was not created",
    );
  }

  // 3. Delete the beat if there was an error uploading the audio
  if (storageAudioError) {
    await supabase.from("beats").delete().eq("id", data.id);
    throw new Error(
      "Beat audio could not be uploaded and the beat was not created",
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
