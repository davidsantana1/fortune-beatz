import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLicense as createLicenseApi } from "../../services/apiLicenses";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export function useCreateLicense() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createLicense } = useMutation({
    mutationFn: createLicenseApi,
    onSuccess: () => {
      toast.success(t("licensesFormSuccessCreate"));
      queryClient.invalidateQueries({
        queryKey: ["licenses"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createLicense };
}
