import { useQuery } from "@tanstack/react-query";
import { getLicenses } from "../../services/apiLicenses";
import { useCurrentPage } from "../../hooks/useCurrentPage";
import { usePrefetchPage } from "../../hooks/usePrefetchPage";

export function useLicenses() {
  const { page } = useCurrentPage();

  const {
    isPending,
    error,
    data: { data: licenses, count } = {},
  } = useQuery({
    queryKey: ["licenses", page],
    queryFn: () => getLicenses({ page }),
  });

  usePrefetchPage("licenses", page, getLicenses, count, true);

  return { isPending, licenses, error, count };
}
