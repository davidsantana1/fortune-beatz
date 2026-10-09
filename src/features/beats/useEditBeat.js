import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditBeat } from "../../services/apiBeats";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export function useEditBeat() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { mutate: editBeat, isPending: isEditing } = useMutation({
    mutationFn: ({ newBeatData, id }) => createEditBeat(newBeatData, id),
    onSuccess: () => {
      toast.success(t("beatsFormSuccessUpdate"));
      queryClient.invalidateQueries({
        queryKey: ["beats"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editBeat };
}
