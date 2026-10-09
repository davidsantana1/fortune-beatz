import { useTranslation } from "react-i18next";
import Button from "./Button";
import Heading from "./Heading";

function ConfirmDelete({ itemType, onCloseModal, onConfirm, disabled }) {
  const { t } = useTranslation();
  return (
    <>
      <Heading casing="capitalize" variant="secondary" as="h3" size="md">
        {t("contextMenuDelete")} <span className="capitalize">{itemType}s</span>
      </Heading>
      <span className="text-xl text-brand-50">
        {t("confirmDeleteMessage", { name: itemType })}
      </span>
      <div className="mt-3 flex justify-end gap-4">
        <Button
          onClick={onConfirm}
          disabled={disabled}
          size="lg"
          variant="danger"
        >
          {t("contextMenuDelete")}
        </Button>
        <Button
          disabled={disabled}
          onClick={onCloseModal}
          size="lg"
          variant="outline"
        >
          {t("cancelButton")}
        </Button>
      </div>
    </>
  );
}

export default ConfirmDelete;
