import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditBeat } from "../../services/apiBeats";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export function useCreateBeat() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { mutate: createBeat, isPending: isCreating } = useMutation({
    mutationFn: createEditBeat,
    onSuccess: () => {
      toast.success(t("beatsFormSuccessCreate"));
      queryClient.invalidateQueries({
        queryKey: ["beats"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createBeat };
}
