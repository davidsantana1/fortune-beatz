import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLicense as updateLicenseApi } from "../../services/apiLicenses";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export function useUpdateLicenses() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { mutate: updateLicense, isPending: isUpdating } = useMutation({
    mutationFn: ({ data, id }) => updateLicenseApi(data, id),
    onSuccess: () => {
      toast.success(t("licensesFormSuccessUpdate"));
      queryClient.invalidateQueries({
        queryKey: ["licenses"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateLicense };
}
