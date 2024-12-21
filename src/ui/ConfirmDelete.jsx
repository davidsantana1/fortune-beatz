import Button from "./Button";
import Heading from "./Heading";

function ConfirmDelete({ itemType, onCloseModal, onConfirm, disabled }) {
  return (
    <>
      <Heading casing="capitalize" variant="secondary" as="h3" size="md">
        Delete {itemType}s
      </Heading>
      <span className="text-xl text-brand-50">
        Are you sure you want to delete this {itemType} permanently? This action
        cannot be undone.
      </span>
      <div className="mt-3 flex justify-end gap-4">
        <Button
          onClick={onConfirm}
          disabled={disabled}
          size="lg"
          variant="danger"
        >
          Delete
        </Button>
        <Button
          disabled={disabled}
          onClick={onCloseModal}
          size="lg"
          variant="outline"
        >
          Cancel
        </Button>
      </div>
    </>
  );
}

export default ConfirmDelete;
