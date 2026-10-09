import { useQuery } from "@tanstack/react-query";
import { getSales } from "../../services/apiSales";
import { useCurrentPage } from "../../hooks/useCurrentPage";
import { usePrefetchPage } from "../../hooks/usePrefetchPage";

export function useSales(all = false) {
  const { page } = useCurrentPage();

  const {
    data: { data: sales, count } = {},
    isPending,
    error,
  } = useQuery({
    queryKey: ["sales", all ? "" : page],
    queryFn: () => getSales({ page: all ? -1 : page }),
  });

  usePrefetchPage("sales", page, getSales, count);

  return { sales, isPending, error, count };
}
