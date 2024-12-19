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

function BeatRow({ beat, number }) {
  const { setCurrentBeat, currentBeat } = useAudioPlayer();
  const { id: beatId, name, bpm, key, type, time, genre, image, audio } = beat;
  const { isDeleting, deleteBeat } = useDeleteBeat();

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
      className="group cursor-pointer transition-all hover:bg-brand-600"
    >
      <TableItem as="td">
        <span className="font-semibold group-hover:hidden">{number}</span>
        <HiPlayCircle className="hidden group-hover:flex" size={20} />
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
