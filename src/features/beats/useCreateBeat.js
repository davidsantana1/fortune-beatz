import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditBeat } from "../../services/apiBeats";
import toast from "react-hot-toast";

export function useCreateBeat() {
  const queryClient = useQueryClient();

  const { mutate: createBeat, isPending: isCreating } = useMutation({
    mutationFn: createEditBeat,
    onSuccess: () => {
      toast.success("New beat successfully created");
      queryClient.invalidateQueries({
        queryKey: ["beats"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createBeat };
}
