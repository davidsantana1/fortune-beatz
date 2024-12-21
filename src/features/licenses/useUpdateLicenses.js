import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLicense as updateLicenseApi } from "../../services/apiLicenses";
import toast from "react-hot-toast";

export function useUpdateLicenses() {
  const queryClient = useQueryClient();

  const { mutate: updateLicense, isPending: isUpdating } = useMutation({
    mutationFn: ({ data, id }) => updateLicenseApi(data, id),
    onSuccess: () => {
      toast.success("License successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["licenses"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateLicense };
}
