import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBeats } from "../../services/apiBeats";
import { useCurrentPage } from "../../hooks/useCurrentPage";
import { usePrefetchPage } from "../../hooks/usePrefetchPage";

export function useBeats(all = false) {
  const { page } = useCurrentPage();
  const queryClient = useQueryClient();

  const {
    isPending,
    data: { data: beats, count } = {},
    error,
  } = useQuery({
    queryKey: ["beats", all ? "" : page],
    queryFn: () => getBeats({ page: all ? -1 : page }),
  });

  usePrefetchPage("beats", page, getBeats, count);

  const getCachedBeats = (pageNum) => {
    const cached = queryClient.getQueryData(["beats", pageNum]);
    return cached?.data || [];
  };

  return { isPending, beats, error, count, getCachedBeats };
}
