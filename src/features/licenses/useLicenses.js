import { useQuery } from "@tanstack/react-query";
import { getLicenses } from "../../services/apiLicenses";

export function useLicenses() {
  const {
    isPending,
    error,
    data: licenses,
  } = useQuery({
    queryKey: ["licenses"],
    queryFn: getLicenses,
  });
  return { isPending, licenses, error };
}
