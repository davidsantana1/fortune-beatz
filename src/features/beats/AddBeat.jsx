import { useTranslation } from "react-i18next";
import CreateBeatForm from "../../features/beats/CreateBeatForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddBeat() {
  const { t } = useTranslation();
  return (
    <div className="pb-32">
      <Modal>
        <Modal.Open opens="create">
          <Button size="lg">{t("beatsTableButton")}</Button>
        </Modal.Open>

        <Modal.Window name="create">
          <CreateBeatForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddBeat;
