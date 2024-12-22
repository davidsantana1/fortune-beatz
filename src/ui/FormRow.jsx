import { useTranslation } from "react-i18next";
import FormError from "./FormError";
import Input from "./Input";
import Label from "./Label";
import SelectInput from "./SelectInput";

function FormRow({
  isSelect = false,
  errors,
  register,
  label,
  id,
  placeholder,
  inputType,
  inputStep,
  disabled,
  children,
}) {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center gap-4">
        <Label htmlFor={id}>{label}</Label>
        <FormError error={errors?.[id]?.message} />
      </div>
      {!isSelect ? (
        <Input
          disabled={disabled}
          type={inputType}
          id={id}
          placeholder={placeholder}
          {...register(id, { required: t("formRequiredMessage") })}
          step={inputStep}
        />
      ) : (
        <SelectInput
          defaultValue=""
          disabled={disabled}
          id={id}
          {...register(id, { required: t("formRequiredMessage") })}
        >
          {children}
        </SelectInput>
      )}
    </>
  );
}

export default FormRow;
