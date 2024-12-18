import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Spinner from "../../ui/Spinner";
import SpinnerMini from "../../ui/SpinnerMini";
import Error from "../../ui/Error";
import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";
import { useForm } from "react-hook-form";
import FormError from "../../ui/FormError";
// import { useEffect } from "react";

function SettingsForm() {
  const {
    isPending,
    settings: {
      basicLicensePrice,
      premiumLicensePrice,
      exclusiveLicensePrice,
      customLicensePrice,
    } = {},
    error,
  } = useSettings();

  const { isUpdating, updateSettings } = useUpdateSettings();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      basicLicensePrice,
      premiumLicensePrice,
      exclusiveLicensePrice,
      customLicensePrice,
    },
  });

  if (isPending) return <Spinner />;
  if (error) return <Error error={error.message} />;

  function onSubmit(data) {
    console.log(data);

    updateSettings(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col rounded-md bg-brand-950 px-8 py-6"
    >
      <Label htmlFor="basicLicensePrice">Basic License Price</Label>
      <Input
        type="number"
        id="basicLicensePrice"
        disabled={isUpdating}
        step="0.01"
        defaultValue={basicLicensePrice}
        {...register("basicLicensePrice", {
          required: "This field is required",
        })}
      />
      <FormError error={errors?.basicLicensePrice?.message} />
      <Label htmlFor="premiumLicensePrice">Premium License Price</Label>
      <Input
        type="number"
        id="premiumLicensePrice"
        disabled={isUpdating}
        step="0.01"
        defaultValue={premiumLicensePrice}
        {...register("premiumLicensePrice", {
          required: "This field is required",
        })}
      />{" "}
      <FormError error={errors?.premiumLicensePrice?.message} />
      <Label htmlFor="exclusiveLicensePrice">Exclusive License Price</Label>
      <Input
        type="number"
        id="exclusiveLicensePrice"
        disabled={isUpdating}
        step="0.01"
        defaultValue={exclusiveLicensePrice}
        {...register("exclusiveLicensePrice", {
          required: "This field is required",
        })}
      />
      <FormError error={errors?.exclusiveLicensePrice?.message} />
      <Label htmlFor="customLicensePrice">Custom License Price</Label>
      <Input
        type="number"
        id="customLicensePrice"
        disabled={isUpdating}
        step="0.01"
        defaultValue={customLicensePrice}
        {...register("customLicensePrice", {
          required: "This field is required",
        })}
      />
      <FormError error={errors?.customLicensePrice?.message} />
      <Button type="submit" size="lg" align="right" disabled={isUpdating}>
        {isUpdating ? <SpinnerMini /> : "Save"}
      </Button>
    </form>
  );
}

export default SettingsForm;
