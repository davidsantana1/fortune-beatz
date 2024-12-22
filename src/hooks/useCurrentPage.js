import { useSearchParams } from "react-router-dom";

export function useCurrentPage() {
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  return { page };
}
