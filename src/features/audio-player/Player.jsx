import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { useQueryClient } from "@tanstack/react-query";
// import "react-h5-audio-player/lib/styles.less";
// import 'react-h5-audio-player/src/styles.scss'

function Player() {
  const { currentBeat, setCurrentBeat } = useAudioPlayer();

  const queryClient = useQueryClient();

  if (currentBeat === "") return null;

  const beats = queryClient.getQueryData(["beats"]);

  let playingIndex;

  if (beats)
    playingIndex = beats.findIndex((beat) => beat.audio === currentBeat);

  function playNext() {
    const nextIndex = playingIndex + 1;

    if (beats.length === nextIndex) {
      return;
    }
    setCurrentBeat(beats.at(nextIndex).audio);
  }

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-gray-800">
      <AudioPlayer autoPlay onEnded={() => playNext()} src={currentBeat} />
    </div>
  );
}

export default Player;
