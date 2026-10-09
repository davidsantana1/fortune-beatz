import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBeat as deleteBeatApi } from "../../services/apiBeats";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export function useDeleteBeat() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteBeat } = useMutation({
    mutationFn: deleteBeatApi,
    onSuccess: () => {
      toast.success(t("beatsFormSuccessDeleted"));
      queryClient.invalidateQueries({ queryKey: ["beats"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBeat };
}
