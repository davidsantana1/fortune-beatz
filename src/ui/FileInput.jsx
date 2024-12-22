import { forwardRef } from "react";
import Label from "./Label";
import FormError from "./FormError";
import { useTranslation } from "react-i18next";

const FileInput = forwardRef(
  (
    { isEditSession = false, inputName, id, errors, register, ...props },
    ref,
  ) => {
    const { t } = useTranslation();
    return (
      <>
        <div className="flex items-center gap-4">
          <Label htmlFor={id}>{inputName}</Label>
          <FormError error={errors?.[id]?.message} />
        </div>
        <div className="mb-4 w-56 rounded-md bg-brand-600 md:w-64">
          <input
            className="text-sm file:mr-5 file:cursor-pointer file:rounded-md file:border-none file:bg-brand-700 file:px-3 file:py-3 file:text-xs file:font-medium file:text-brand-50 file:transition-all file:hover:bg-brand-800 disabled:cursor-not-allowed file:disabled:bg-brand-800 file:sm:px-5 file:sm:text-sm"
            {...props}
            id={id}
            ref={ref}
            {...register(id, {
              required: isEditSession ? false : t("formRequiredMessage"),
            })}
          />
        </div>
      </>
    );
  },
);

FileInput.displayName = "FileInput";

export default FileInput;
