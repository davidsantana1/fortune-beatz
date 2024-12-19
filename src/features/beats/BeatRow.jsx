import TableItem from "../../ui/TableItem";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { HiPencil, HiTrash } from "react-icons/hi2";
import CreateBeatForm from "./CreateBeatForm";
import { convertSecondsToMinutes } from "../../utils/helpers";
import { useDeleteBeat } from "./useDeleteBeat";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { HiPlayCircle } from "react-icons/hi2";
import { useEffect } from "react";
import { useState } from "react";

function BeatRow({ beat, number }) {
  const [time, setTime] = useState("");
  const { setCurrentBeat, currentBeat } = useAudioPlayer();
  const { isDeleting, deleteBeat } = useDeleteBeat();

  const { id: beatId, name, bpm, key, type, genre, image, audio } = beat;

  const isPlaying = currentBeat === audio;

  useEffect(() => {
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

  function handlePlay(event) {
    if (
      event.target.closest("button") ||
      event.target.closest(".modal-window")
    ) {
      return;
    }

    if (audio === currentBeat) setCurrentBeat("a");
    setTimeout(() => {
      setCurrentBeat(audio);
    }, 0);
  }

  return (
    <tr
      onClick={handlePlay}
      className={`group cursor-pointer transition-all hover:bg-brand-600 ${isPlaying && "bg-brand-600"}`}
    >
      <TableItem as="td">
        {!isPlaying && (
          <span className="font-semibold group-hover:hidden">{number}</span>
        )}
        <HiPlayCircle
          className={`${isPlaying ? "flex" : "hidden"} group-hover:flex`}
          size={20}
        />
      </TableItem>
      <TableItem as="td" isImage={true}>
        <div className="p-2">
          <div className="max-w-20 overflow-hidden rounded-md bg-red-500">
            <img
              className="aspect-square max-w-20 object-cover"
              src={image}
              alt="Beat Image"
            />
          </div>
        </div>
      </TableItem>
      <TableItem as="td">{name}</TableItem>
      <TableItem as="td">{type}</TableItem>
      <TableItem as="td">{genre}</TableItem>
      <TableItem as="td">{convertSecondsToMinutes(time)}</TableItem>
      <TableItem as="td">{bpm}</TableItem>
      <TableItem as="td">{key}</TableItem>

      <Modal>
        <TableItem as="td">
          <div className="flex gap-4">
            <Modal.Open opens="edit">
              <Button
                aria-label={`Edit Beat ${name}`}
                variant="secondary"
                size="lg"
              >
                <HiPencil />
              </Button>
            </Modal.Open>

            <Modal.Open opens="delete">
              <Button
                aria-label={`Delete Beat ${name}`}
                variant="danger"
                size="lg"
              >
                <HiTrash />
              </Button>
            </Modal.Open>

            <Modal.Window name="edit">
              <CreateBeatForm beatToEdit={beat} isEditSession={true} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                disabled={isDeleting}
                onConfirm={() => deleteBeat(beatId)}
                itemType="beat"
              />
            </Modal.Window>
          </div>
        </TableItem>
      </Modal>
    </tr>
  );
}

export default BeatRow;
