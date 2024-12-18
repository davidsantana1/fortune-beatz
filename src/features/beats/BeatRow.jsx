import TableItem from "../../ui/TableItem";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { HiPencil, HiTrash } from "react-icons/hi2";
import CreateBeatForm from "./CreateBeatForm";
import { convertSecondsToMinutes } from "../../utils/helpers";
import { useDeleteBeat } from "./useDeleteBeat";

function BeatRow({ beat }) {
  const { id: beatId, name, bpm, key, type, time, genre, image } = beat;
  const { isDeleting, deleteBeat } = useDeleteBeat();
  return (
    <tr className="cursor-pointer transition-all hover:bg-brand-600">
      <TableItem as="td" isImage={true}>
        <img
          className="aspect-square max-w-20 object-cover"
          src={image}
          alt="Beat Image"
        />
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
              <Button variant="secondary" size="lg">
                <HiPencil />
              </Button>
            </Modal.Open>

            <Modal.Open opens="delete">
              <Button variant="danger" size="lg">
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
