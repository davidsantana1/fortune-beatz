import { useState } from "react";
import { useEffect } from "react";

async function getAudioDuration(audioSrc) {
  return new Promise((resolve, reject) => {
    const audioEl = new Audio(audioSrc);

    audioEl.addEventListener("loadedmetadata", () => {
      resolve(audioEl.duration);
    });

    audioEl.addEventListener("error", () => {
      reject("Failed to load audio");
    });
  });
}

export function useAudioDuration(audio) {
  const [time, setTime] = useState("");

  useEffect(() => {
    if (audio) {
      getAudioDuration(audio)
        .then((duration) => {
          setTime(duration);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [audio]);

  return { time };
}
