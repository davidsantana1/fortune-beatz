import Input from "../../ui/Input";
import Heading from "../../ui/Heading";
import Label from "../../ui/Label";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import { useForm } from "react-hook-form";
import FormError from "../../ui/FormError";
import { HiMiniPlusCircle, HiPencil } from "react-icons/hi2";
import { useCreateBeat } from "./useCreateBeat";
import { useEditBeat } from "./useEditBeat";

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

    console.log(data);
    if (!data) return;

    if (isEditSession) {
      editBeat(
        { newBeatData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    } else {
      createBeat(
        { ...data, image: image },
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <Heading size="md">
        <div className="flex items-center gap-3">
          {isEditSession ? <HiPencil /> : <HiMiniPlusCircle size="1.6rem" />}
          {isEditSession ? "Edit" : "Create"} Beat
        </div>
      </Heading>
      <div className="flex items-center gap-4">
        <Label htmlFor="name">Name</Label>
        <FormError error={errors?.name?.message} />
      </div>
      <Input
        id="name"
        placeholder="Name"
        {...register("name", { required: "This field is required" })}
        disabled={isWorking}
      />

      <div className="flex items-center gap-4">
        <Label htmlFor="type">Type</Label>
        <FormError error={errors?.type?.message} />
      </div>
      <Input
        id="type"
        placeholder="Bad Bunny"
        {...register("type", { required: "This field is required" })}
        disabled={isWorking}
      />

      <div className="flex items-center gap-4">
        <Label htmlFor="genre">Genre</Label>
        <FormError error={errors?.genre?.message} />
      </div>
      <Input
        id="genre"
        placeholder="Reggaeton"
        {...register("genre", {
          required: "This field is required",
        })}
        disabled={isWorking}
      />

      <div className="flex items-center gap-4">
        <Label htmlFor="bpm">BPM</Label>
        <FormError error={errors?.bpm?.message} />
      </div>
      <Input
        id="bpm"
        placeholder="90"
        {...register("bpm", { required: "This field is required" })}
        disabled={isWorking}
      />

      <div className="flex items-center gap-4">
        <Label htmlFor="key">Key</Label>
        <FormError error={errors?.key?.message} />
      </div>
      <Input
        id="key"
        placeholder="B minor"
        {...register("key", { required: "This field is required" })}
        disabled={isWorking}
      />

      <div className="flex items-center gap-4">
        <Label htmlFor="image">Image</Label>
        <FormError error={errors?.image?.message} />
      </div>
      <FileInput
        disabled={isWorking}
        id="image"
        {...register("image", {
          required: isEditSession ? false : "This field is required",
        })}
      />

      <Input className="hidden" id="time" {...register("time")} value={154} />

      <Button align="right" size="lg">
        {isEditSession ? "Edit" : "Create"}
      </Button>
    </form>
  );
}

export default CreateBeatForm;
