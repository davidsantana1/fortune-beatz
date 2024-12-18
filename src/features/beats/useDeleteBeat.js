import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBeat as deleteBeatApi } from "../../services/apiBeats";
import toast from "react-hot-toast";

export function useDeleteBeat() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteBeat } = useMutation({
    mutationFn: deleteBeatApi,
    onSuccess: () => {
      toast.success("Beat successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["beats"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteBeat };
}
