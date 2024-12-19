import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
// import "react-h5-audio-player/lib/styles.less";
// import 'react-h5-audio-player/src/styles.scss'

function Player() {
  const { currentBeat } = useAudioPlayer();

  if (currentBeat === "") return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-gray-800">
      <AudioPlayer
        autoPlay
        src={currentBeat}
        onPlay={() => console.log("onPlay")}
      />
    </div>
  );
}

export default Player;
