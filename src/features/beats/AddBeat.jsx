import CreateBeatForm from "../../features/beats/CreateBeatForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddBeat() {
  return (
    <Modal>
      <Modal.Open opens="create">
        <Button size="lg">Create new beat</Button>
      </Modal.Open>

      <Modal.Window name="create">
        <CreateBeatForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddBeat;
