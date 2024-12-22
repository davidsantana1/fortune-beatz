import FileInput from "../../ui/FileInput";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateBeat } from "./useCreateBeat";
import { useEditBeat } from "./useEditBeat";
import { KEYS } from "../../utils/constants";
import Form from "../../ui/Form";
import TwoColsInput from "../../ui/TwoColsInput";
import TwoColsFileInput from "../../ui/TwoColsFileInput";

function CreateBeatForm({
  beatToEdit = {},
  onCloseModal,
  isEditSession = false,
}) {
  const { isCreating, createBeat } = useCreateBeat();
  const { isEditing, editBeat } = useEditBeat();
  const isWorking = isCreating || isEditing;
  const { id: editId } = beatToEdit;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: isEditSession ? { ...beatToEdit } : {} });

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    const audio = typeof data.audio === "string" ? data.audio : data.audio[0];

    if (!data) return;

    if (isEditSession) {
      editBeat(
        { newBeatData: { ...data, image, audio }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    } else {
      createBeat(
        { ...data, image: image, audio: audio },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    }
  }

  return (
    <Form
      isEditSession={isEditSession}
      formName="Beat"
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      isWorking={isWorking}
      formId="create-beat-form"
    >
      <TwoColsInput>
        <TwoColsInput.Col>
          <FormRow
            disabled={isWorking}
            errors={errors}
            register={register}
            label="Name"
            id="name"
            placeholder="Beat Name"
            inputType="text"
          />

          <FormRow
            disabled={isWorking}
            errors={errors}
            register={register}
            label="Type"
            id="type"
            placeholder="Bad Bunny"
            inputType="text"
          />

          <FormRow
            disabled={isWorking}
            errors={errors}
            register={register}
            label="Genre"
            id="genre"
            placeholder="Reggaeton"
            inputType="text"
          />
        </TwoColsInput.Col>
        <TwoColsInput.Col>
          <FormRow
            disabled={isWorking}
            errors={errors}
            register={register}
            label="BPM"
            id="bpm"
            placeholder="90"
            inputType="number"
          />

          <FormRow
            isSelect={true}
            disabled={isWorking}
            errors={errors}
            register={register}
            label="Key"
            id="key"
            placeholder="B minor"
          >
            <option value="" disabled>
              --- Select a key ---
            </option>
            {KEYS.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </FormRow>
        </TwoColsInput.Col>
      </TwoColsInput>

      <TwoColsFileInput>
        <TwoColsFileInput.Col>
          <FileInput
            inputName="Image"
            errors={errors}
            type="file"
            accept="image/*"
            disabled={isWorking}
            id="image"
            isEditSession={isEditSession}
            register={register}
          />
        </TwoColsFileInput.Col>

        <TwoColsFileInput.Col>
          <FileInput
            inputName="Beat"
            errors={errors}
            type="file"
            accept="audio/*"
            disabled={isWorking}
            id="audio"
            isEditSession={isEditSession}
            register={register}
          />
        </TwoColsFileInput.Col>
      </TwoColsFileInput>
    </Form>
  );
}

export default CreateBeatForm;
