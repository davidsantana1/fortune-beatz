import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLicense as deleteLicenseApi } from "../../services/apiLicenses";
import toast from "react-hot-toast";

export function useDeleteLicense() {
  const queryClient = useQueryClient();

  const { mutate: deleteLicense, isPending: isDeleting } = useMutation({
    mutationFn: deleteLicenseApi,
    onSuccess: () => {
      toast.success("License successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["licenses"] });
    },
    onError: (err) => toast.error(err),
  });

  return { isDeleting, deleteLicense };
}
