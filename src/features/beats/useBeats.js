import { useQuery } from "@tanstack/react-query";
import { getBeats } from "../../services/apiBeats";
import { useCurrentPage } from "../../hooks/useCurrentPage";
import { usePrefetchPage } from "../../hooks/usePrefetchPage";

export function useBeats() {
  const { page } = useCurrentPage();

  const {
    isPending,
    data: { data: beats, count } = {},
    error,
  } = useQuery({
    queryKey: ["beats", page],
    queryFn: () => getBeats({ page }),
  });

  usePrefetchPage("beats", page, getBeats, count);

  return { isPending, beats, error, count };
}
