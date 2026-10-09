import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateLicenseForm from "./CreateLicenseForm";
import { useTranslation } from "react-i18next";

function AddLicense() {
  const { t } = useTranslation();
  return (
    <Modal>
      <Modal.Open opens="new-license">
        <Button type="submit" size="lg" align="left">
          {t("licensesTableButton")}
        </Button>
      </Modal.Open>
      <Modal.Window name="new-license">
        <CreateLicenseForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddLicense;
