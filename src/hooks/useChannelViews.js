import { useQuery } from "@tanstack/react-query";
import { getChannelViews } from "../services/apiViews";

export function useGetViews() {
  const {
    data: views,
    isPending,
    error,
  } = useQuery({
    queryKey: ["views"],
    queryFn: getChannelViews,
  });
  return { views, isPending, error };
}
