import { useForm } from "react-hook-form";
import { useCreateLicense } from "./useCreateLicense";
import FormRow from "../../ui/FormRow";
import { useUpdateLicenses } from "./useUpdateLicenses";
import { useLicenses } from "./useLicenses";
import toast from "react-hot-toast";
import Form from "../../ui/Form";
import TwoColsInput from "../../ui/TwoColsInput";
import { useTranslation } from "react-i18next";

function CreateLicenseForm({ isEditSession = false, license, onCloseModal }) {
  const { t } = useTranslation();
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
      formName={t("licensesConfirmDelete")}
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
            label={t("licensesTableName")}
            id="name"
            placeholder={t("licensesFormNamePlaceholder")}
            inputType="text"
          />
          <FormRow
            disabled={isWorking}
            errors={errors}
            register={register}
            label={t("licensesTablePrice")}
            id="price"
            placeholder="19.99"
            inputType="number"
            inputStep="0.01"
          />

          <FormRow
            disabled={isWorking}
            errors={errors}
            register={register}
            label={t("licensesTableMusicVideos")}
            id="musicVideos"
            placeholder="1"
            inputType="number"
          />

          <FormRow
            disabled={isWorking}
            errors={errors}
            register={register}
            label={t("licensesTableCopies")}
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
            label={t("licensesTableStreams")}
            id="allowedStreams"
            placeholder="20000"
            inputType="number"
          />

          <FormRow
            disabled={isWorking}
            isSelect={true}
            errors={errors}
            register={register}
            label={t("licensesTableProfitLivePerformances")}
            id="forProfitLivePerformance"
          >
            <option value="" disabled>
              --- {t("licensesFormKeyPlaceholder")} ---
            </option>
            <option value="yes">{t("licensesTableYes")}</option>
            <option value="no">No</option>
          </FormRow>

          <FormRow
            disabled={isWorking}
            placeholder="1"
            errors={errors}
            register={register}
            label={t("licensesTableRadioStations")}
            id="allowedRadioStations"
            inputType="number"
          />
        </TwoColsInput.Col>
      </TwoColsInput>
    </Form>
  );
}

export default CreateLicenseForm;
