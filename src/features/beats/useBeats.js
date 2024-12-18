import { useQuery } from "@tanstack/react-query";
import { getBeats } from "../../services/apiBeats";

export function useBeats() {
  const {
    isPending,
    data: beats,
    error,
  } = useQuery({
    queryKey: ["beats"],
    queryFn: getBeats,
  });
  return { isPending, beats, error };
}
