import { useEffect } from "react";
import { useContext, createContext, useState } from "react";

const AudioPlayerContext = createContext();

function AudioPlayerProvider({ children }) {
  const [currentBeat, setCurrentBeat] = useState(null);
  const [nowPlaying, setNowPlaying] = useState("");

  useEffect(() => {
    if (currentBeat) {
      setNowPlaying(currentBeat.audio || "");
    } else {
      setNowPlaying("");
    }
  }, [currentBeat]);

  return (
    <AudioPlayerContext.Provider
      value={{ currentBeat, setCurrentBeat, nowPlaying }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

function useAudioPlayer() {
  const context = useContext(AudioPlayerContext);

  if (context === undefined) {
    throw new Error("AudioPlayerContext was used outside AudioPlayerProvider");
  }

  return context;
}

export { useAudioPlayer, AudioPlayerProvider };
