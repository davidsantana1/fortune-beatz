import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditBeat } from "../../services/apiBeats";
import toast from "react-hot-toast";

export function useEditBeat() {
  const queryClient = useQueryClient();

  const { mutate: editBeat, isPending: isEditing } = useMutation({
    mutationFn: ({ newBeatData, id }) => createEditBeat(newBeatData, id),
    onSuccess: () => {
      toast.success("Beat successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["beats"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editBeat };
}
