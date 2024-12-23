import { PAGE_SIZE } from "../utils/constants";
import { useCurrentPage } from "./useCurrentPage";

export function useRowNumber(index, license = false) {
  const { page: currentPage } = useCurrentPage();
  const rowNumber = index + 1 + (currentPage - 1) * (license ? 5 : PAGE_SIZE);

  return rowNumber;
}
