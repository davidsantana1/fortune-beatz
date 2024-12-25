import { CHANNEL_ID, YOUTUBE } from "../utils/constants";

const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${CHANNEL_ID}&key=${YOUTUBE}`;

export async function getChannelViews() {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }
    const data = await res.json();

    return data?.items[0]?.statistics?.viewCount;
  } catch (err) {
    console.log(err.message);
  }
}
