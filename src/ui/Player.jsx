import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import "react-h5-audio-player/lib/styles.less";
// import 'react-h5-audio-player/src/styles.scss'

function Player() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-gray-800">
      <AudioPlayer
        autoPlay
        src="http://example.com/audio.mp3"
        onPlay={() => console.log("onPlay")}
      />
    </div>
  );
}

export default Player;
