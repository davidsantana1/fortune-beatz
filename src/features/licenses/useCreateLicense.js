import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLicense as createLicenseApi } from "../../services/apiLicenses";
import toast from "react-hot-toast";

export function useCreateLicense() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createLicense } = useMutation({
    mutationFn: createLicenseApi,
    onSuccess: () => {
      toast.success("License created successfully");
      queryClient.invalidateQueries({
        queryKey: ["licenses"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createLicense };
}
