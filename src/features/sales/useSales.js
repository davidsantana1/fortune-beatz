import { useQuery } from "@tanstack/react-query";
import { getSales } from "../../services/apiSales";

export function useSales() {
  const {
    data: sales,
    isPending,
    error,
  } = useQuery({
    queryKey: ["sales"],
    queryFn: getSales,
  });

  return { sales, isPending, error };
}
