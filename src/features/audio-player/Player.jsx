import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useLocation, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { useBeats } from "../beats/useBeats";

import { HiXMark } from "react-icons/hi2";
import { PAGE_SIZE } from "../../utils/constants";

import ForwardIcon from "./ForwardIcon";
import RewindIcon from "./RewindIcon";
import toast from "react-hot-toast";

const calculatePlayingIndex = (beats, nowPlaying) =>
  beats?.findIndex((beat) => beat.audio === nowPlaying) + 1 || 0;

const getPageNumber = (searchParams) => Number(searchParams.get("page")) || 1;

function Player() {
  const { t } = useTranslation();

  const { currentBeat, setCurrentBeat, nowPlaying } = useAudioPlayer();
  const { beats, getCachedBeats } = useBeats();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const playingIndex = calculatePlayingIndex(beats, nowPlaying);
  const isLastBeatInPage = playingIndex % PAGE_SIZE === 0;
  const isFirstBeatInPage = playingIndex === 1;

  const changePage = (offset) => {
    if (location.pathname === "/beats" && beats && nowPlaying !== "") {
      const currentPage = getPageNumber(searchParams) + offset;
      searchParams.set("page", currentPage);
      setSearchParams(searchParams);
    }
  };

  const handlePlayNext = () => {
    if (isLastBeatInPage) {
      const nextPage = getPageNumber(searchParams) + 1;
      const nextBeats = getCachedBeats(nextPage);

      if (nextBeats?.length) {
        console.log("LOG");

        changePage(1);
        if (nextBeats.at(0) === currentBeat)
          toast.error("No more beats available");
        setCurrentBeat(nextBeats.at(0));
      } else {
        const nextIndex = playingIndex % beats.length;

        setCurrentBeat(beats[nextIndex]);
      }
    } else {
      const nextIndex = playingIndex % beats.length;
      setCurrentBeat(beats[nextIndex]);
    }
  };

  const handlePlayPrevious = () => {
    if (getPageNumber(searchParams) === 1 && currentBeat === beats.at(0))
      return;
    if (isFirstBeatInPage && getPageNumber(searchParams) > 1) {
      const previousPage = getPageNumber(searchParams) - 1;
      changePage(-1);

      const previousBeats = getCachedBeats(previousPage);

      if (previousBeats?.length) {
        setCurrentBeat(previousBeats.at(-1));
      }
    } else {
      const prevIndex = (playingIndex - 2 + beats.length) % beats.length;
      if (prevIndex >= 0) setCurrentBeat(beats[prevIndex]);
    }
  };

  if (!nowPlaying) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-brand-900">
      {currentBeat?.name && (
        <div className="flex items-center justify-center py-2 text-center shadow-md">
          <p className="font-bold text-brand-50">
            {t("audioPlayerNow")}: {currentBeat?.name}
          </p>
          <HiXMark
            size={23}
            className="absolute right-4 cursor-pointer text-brand-50 transition-all hover:text-red-500"
            onClick={() => setCurrentBeat(null)}
          />
        </div>
      )}
      <AudioPlayer
        autoPlay
        onEnded={handlePlayNext}
        src={nowPlaying}
        showSkipControls={true}
        onClickNext={handlePlayNext}
        onClickPrevious={handlePlayPrevious}
        customIcons={{
          forward: <ForwardIcon />,
          rewind: <RewindIcon />,
        }}
      />
    </div>
  );
}

export default Player;
