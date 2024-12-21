import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateLicenseForm from "./CreateLicenseForm";

function AddLicense() {
  return (
    <Modal>
      <Modal.Open opens="new-license">
        <Button type="submit" size="lg" align="left">
          Create New License
        </Button>
      </Modal.Open>
      <Modal.Window name="new-license">
        <CreateLicenseForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddLicense;
