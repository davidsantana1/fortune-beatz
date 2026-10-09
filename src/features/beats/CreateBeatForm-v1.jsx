import Heading from "../../ui/Heading";
import Label from "../../ui/Label";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import SpinnerMini from "../../ui/SpinnerMini";
import { useForm } from "react-hook-form";
import FormError from "../../ui/FormError";
import FormRow from "../../ui/FormRow";
import { HiMiniPlusCircle, HiPencil } from "react-icons/hi2";
import { useCreateBeat } from "./useCreateBeat";
import { useEditBeat } from "./useEditBeat";
import { KEYS } from "../../utils/constants";

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
    <>
      <Heading size="md">
        <div className="flex items-center gap-3 text-xl sm:text-3xl">
          {isEditSession ? <HiPencil /> : <HiMiniPlusCircle size="1.6rem" />}
          {isEditSession ? "Edit" : "Create"} Beat
        </div>
      </Heading>
      <form
        id="create-beat-form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-[30rem] flex-col overflow-y-scroll sm:h-auto sm:overflow-y-hidden"
      >
        <div className="divide-y-1 grid sm:grid-cols-2 sm:gap-16">
          <div>
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
          </div>
          <div>
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
              <option value="C# Major">C# Major</option>
            </FormRow>
          </div>
        </div>

        <div className="grid xl:grid-cols-2">
          <div>
            <div className="flex items-center gap-4">
              <Label htmlFor="image">Image</Label>
              <FormError error={errors?.image?.message} />
            </div>
            <FileInput
              type="file"
              accept="image/*"
              disabled={isWorking}
              id="image"
              {...register("image", {
                required: isEditSession ? false : "formRequiredMessage",
              })}
            />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <Label htmlFor="audio">Beat</Label>
              <FormError error={errors?.audio?.message} />
            </div>
            <FileInput
              type="file"
              accept="audio/*"
              disabled={isWorking}
              id="audio"
              {...register("audio", {
                required: isEditSession ? false : "This field is required",
              })}
            />
          </div>
        </div>
      </form>
      <div className="flex">
        <Button
          form="create-beat-form"
          align="right"
          size="lg"
          margin="top"
          disabled={isWorking}
        >
          {isWorking ? <SpinnerMini /> : isEditSession ? "Edit" : "Create"}
        </Button>
      </div>
    </>
  );
}

export default CreateBeatForm;
