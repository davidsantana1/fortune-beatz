import FileInput from "../../ui/FileInput";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateBeat } from "./useCreateBeat";
import { useEditBeat } from "./useEditBeat";
import { KEYS } from "../../utils/constants";
import Form from "../../ui/Form";
import TwoColsInput from "../../ui/TwoColsInput";
import TwoColsFileInput from "../../ui/TwoColsFileInput";
import { useTranslation } from "react-i18next";
import Compressor from "compressorjs";
import toast from "react-hot-toast";

function CreateBeatForm({
  beatToEdit = {},
  onCloseModal,
  isEditSession = false,
}) {
  const { t } = useTranslation();
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

    const compressImage = (file) => {
      return new Promise((resolve, reject) => {
        new Compressor(file, {
          quality: 0.6,
          convertSize: 50000,

          success: (result) => resolve(result),
          error: (err) => reject(err),
        });
      });
    };

    const handleSubmission = async () => {
      try {
        const compressedImage = image ? await compressImage(image) : null;
        data.image = compressedImage;
        if (isEditSession) {
          editBeat(
            {
              newBeatData: { ...data, image: compressedImage, audio },
              id: editId,
            },
            {
              onSuccess: () => {
                reset();
                onCloseModal?.();
              },
            },
          );
        } else {
          createBeat(
            { ...data, image: compressedImage, audio: audio },
            {
              onSuccess: () => {
                reset();
                onCloseModal?.();
              },
            },
          );
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    handleSubmission();
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
            label={t("beatsTableName")}
            id="name"
            placeholder={t("beatsFormNamePlaceholder")}
            inputType="text"
          />

          <FormRow
            disabled={isWorking}
            errors={errors}
            register={register}
            label={t("beatsTableArtistType")}
            id="type"
            placeholder="Bad Bunny"
            inputType="text"
          />

          <FormRow
            disabled={isWorking}
            errors={errors}
            register={register}
            label={t("beatsTableGenre")}
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
            label={t("beatsTableKey")}
            id="key"
            placeholder="B minor"
          >
            <option value="" disabled>
              --- {t("beatsFormKeyPlaceholder")} ---
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
            inputName={t("beatsFormImageLabel")}
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
