import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLicense as deleteLicenseApi } from "../../services/apiLicenses";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export function useDeleteLicense() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { mutate: deleteLicense, isPending: isDeleting } = useMutation({
    mutationFn: deleteLicenseApi,
    onSuccess: () => {
      toast.success(t("licensesFormSuccessDeleted"));
      queryClient.invalidateQueries({ queryKey: ["licenses"] });
    },
    onError: (err) => toast.error(err),
  });

  return { isDeleting, deleteLicense };
}
