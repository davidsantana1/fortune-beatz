import { useForm } from "react-hook-form";
import { useCreateLicense } from "./useCreateLicense";
import FormRow from "../../ui/FormRow";
import { useUpdateLicenses } from "./useUpdateLicenses";
import { useLicenses } from "./useLicenses";
import toast from "react-hot-toast";
import Form from "../../ui/Form";
import TwoColsInput from "../../ui/TwoColsInput";

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
    <Form
      isEditSession={isEditSession}
      formName="License"
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      isWorking={isWorking}
      formId="create-license-form"
    >
      <TwoColsInput>
        <TwoColsInput.Col>
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
        </TwoColsInput.Col>

        <TwoColsInput.Col>
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
          >
            <option value="" disabled>
              --- Select an option ---
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </FormRow>

          <FormRow
            disabled={isWorking}
            placeholder="1"
            errors={errors}
            register={register}
            label="Allowed Radio Stations"
            id="allowedRadioStations"
            inputType="number"
          />
        </TwoColsInput.Col>
      </TwoColsInput>
    </Form>
  );
}

export default CreateLicenseForm;
