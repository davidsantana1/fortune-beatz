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
import toast from "react-hot-toast";
import GoogleDrivePicker from "./GoogleDrivePicker";
import Label from "../../ui/Label";
import { useState } from "react";
import { useEffect } from "react";

function CreateBeatForm({
  beatToEdit = {},
  onCloseModal,
  isEditSession = false,
}) {
  const { t } = useTranslation();
  const { isCreating, createBeat } = useCreateBeat();
  const { isEditing, editBeat } = useEditBeat();
  const [wavUploaded, setWavUploaded] = useState("");
  const [mp3Uploaded, setMp3Uploaded] = useState("");
  const [stemsUploaded, setStemsUploaded] = useState("");

  const isWorking = isCreating || isEditing;
  const { id: editId } = beatToEdit;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: isEditSession ? { ...beatToEdit } : {} });

  useEffect(() => {}, []);

  function onWavSelected(data) {
    if (data.fileType !== "WAV") return;
    setWavUploaded(data);
  }

  function onMp3Selected(data) {
    if (data.fileType !== "MP3") return;
    setMp3Uploaded(data);
  }

  function onStemsSelected(data) {
    if (data.fileType !== "STEMS") return;
    setStemsUploaded(data);
  }

  function onSubmit(data) {
    if (!isEditSession) {
      if (!wavUploaded || !wavUploaded.docs.at(0).url) {
        toast.error("No Wav File Uploaded");
        return;
      }

      if (!stemsUploaded || !stemsUploaded.docs.at(0).url) {
        toast.error("No STEMS File Uploaded");
        return;
      }

      if (!mp3Uploaded || !mp3Uploaded.docs.at(0).url) {
        toast.error("No MP3 File Uploaded");
        return;
      }

      data.driveWav = wavUploaded?.docs?.at(0)?.url;
      data.driveMp3 = mp3Uploaded?.docs?.at(0)?.url;
      data.driveStems = stemsUploaded?.docs?.at(0)?.url;
    }

    const image = typeof data.image === "string" ? data.image : data.image[0];
    const audio = typeof data.audio === "string" ? data.audio : data.audio[0];

    if (!data) return;

    const handleSubmission = async () => {
      try {
        if (isEditSession) {
          editBeat(
            {
              newBeatData: { ...data, image: image, audio },
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
            { ...data, image: image, audio: audio },
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

          <div className="flex items-center gap-4">
            <Label htmlFor="untaggedBeat">{t("untaggedBeatLabel")}</Label>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-2 xl:flex xl:gap-4">
            <GoogleDrivePicker
              onFileSelected={onWavSelected}
              text="WAV"
              isMissing={!isEditSession ? !wavUploaded : false}
            />
            <GoogleDrivePicker
              onFileSelected={onMp3Selected}
              text="MP3"
              isMissing={!isEditSession ? !mp3Uploaded : false}
            />
            <GoogleDrivePicker
              onFileSelected={onStemsSelected}
              text="STEMS"
              isMissing={!isEditSession ? !stemsUploaded : false}
            />
          </div>
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
            inputName={t("beatLabel")}
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
