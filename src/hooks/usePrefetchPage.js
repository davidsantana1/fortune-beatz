import { useQueryClient } from "@tanstack/react-query";
import { getPagination } from "../utils/helpers";

export function usePrefetchPage(
  key,
  page,
  queryFunction,
  count,
  licenses = false,
) {
  const queryClient = useQueryClient();
  const { pageCount } = getPagination({ count, licenses });

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: [key, page + 1],
      queryFn: () => queryFunction({ page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: [key, page - 1],
      queryFn: () => queryFunction({ page: page - 1 }),
    });
  }
}
