import { useContext, createContext, useState } from "react";

const AudioPlayerContext = createContext();

function AudioPlayerProvider({ children }) {
  const [currentBeat, setCurrentBeat] = useState("");

  return (
    <AudioPlayerContext.Provider value={{ currentBeat, setCurrentBeat }}>
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
