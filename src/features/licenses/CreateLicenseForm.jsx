import { useForm } from "react-hook-form";
import { useCreateLicense } from "./useCreateLicense";
import { HiMiniPlusCircle, HiPencil } from "react-icons/hi2";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useUpdateLicenses } from "./useUpdateLicenses";
import { useLicenses } from "./useLicenses";
import toast from "react-hot-toast";

function CreateLicenseForm({ isEditSession = false, license, onCloseModal }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: isEditSession
      ? {
          ...license,
          forProfitLivePerformance: license.forProfitLivePerformance
            ? "yes"
            : "no",
        }
      : "",
  });

  const { isCreating, createLicense } = useCreateLicense();
  const { isUpdating, updateLicense } = useUpdateLicenses();
  const { licenses } = useLicenses();

  const isWorking = isCreating || isUpdating;

  function onSubmit(data) {
    if (isEditSession) {
      const { id } = license;

      updateLicense(
        { data, id },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    } else {
      if (licenses.length <= 10) {
        createLicense(data, {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        });
      } else {
        toast.error("Can't create more licenses");
      }
    }
  }

  return (
    <>
      <form
        id="create-license-form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-h-[35rem] flex-col overflow-y-scroll"
      >
        <Heading size="md">
          <div className="flex items-center gap-3 text-xl sm:text-3xl">
            {isEditSession ? <HiPencil /> : <HiMiniPlusCircle size="1.6rem" />}
            {isEditSession ? "Edit" : "Create"} License
          </div>
        </Heading>
        <FormRow
          disabled={isWorking}
          errors={errors}
          register={register}
          label="Name"
          id="name"
          placeholder="Basic"
          inputType="text"
        />
        <FormRow
          disabled={isWorking}
          errors={errors}
          register={register}
          label="Price"
          id="price"
          placeholder="19.99"
          inputType="number"
          inputStep="0.01"
        />

        <FormRow
          disabled={isWorking}
          errors={errors}
          register={register}
          label="Allowed Music Videos"
          id="musicVideos"
          placeholder="1"
          inputType="number"
        />

        <FormRow
          disabled={isWorking}
          errors={errors}
          register={register}
          label="Allowed Copies"
          id="allowedCopies"
          placeholder="20000"
          inputType="number"
        />

        <FormRow
          disabled={isWorking}
          errors={errors}
          register={register}
          label="Allowed Streams"
          id="allowedStreams"
          placeholder="20000"
          inputType="number"
        />

        <FormRow
          disabled={isWorking}
          isSelect={true}
          errors={errors}
          register={register}
          label="Allow Profit Live Performance"
          id="forProfitLivePerformance"
        />

        <FormRow
          disabled={isWorking}
          placeholder="1"
          errors={errors}
          register={register}
          label="Allowed Radio Stations"
          id="allowedRadioStations"
          inputType="number"
        />
      </form>
      <div className="mt-4 flex">
        <Button
          type="submit"
          form="create-license-form"
          size="lg"
          align="right"
        >
          {isEditSession ? "Edit" : "Create"}
        </Button>
      </div>
    </>
  );
}

export default CreateLicenseForm;
