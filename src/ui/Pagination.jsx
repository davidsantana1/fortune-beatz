import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import { PAGE_SIZE } from "../utils/constants";
import { useCurrentPage } from "../hooks/useCurrentPage";
import { getPagination } from "../utils/helpers";
import { Trans, useTranslation } from "react-i18next";

function Pagination({ count, licenses = false }) {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { page: currentPage } = useCurrentPage();

  const { pageCount } = getPagination({ count, licenses });

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  const from = (currentPage - 1) * PAGE_SIZE + 1;
  const to = currentPage === pageCount ? count : currentPage * PAGE_SIZE;
  const reCount = count;

  return (
    <div className="flex items-center justify-between bg-brand-800 px-5 py-3 font-semibold text-brand-50">
      <p>
        {/* prettier-ignore */}
        <Trans i18nKey={"paginationResults"}  >
        Showing <PaginationNumber>{{from}}</PaginationNumber> to <PaginationNumber>{{to}}</PaginationNumber> of <PaginationNumber>{{reCount}}</PaginationNumber> results
        </Trans>
      </p>

      <div className="flex gap-4">
        <Button
          disabled={currentPage === 1}
          onClick={prevPage}
          variant="pagination"
        >
          <div className="flex items-center gap-2">
            <HiChevronLeft />{" "}
            <span className="hidden sm:flex">{t("paginationPrev")}</span>
          </div>
        </Button>
        <Button
          disabled={currentPage === pageCount}
          onClick={nextPage}
          variant="pagination"
        >
          <div className="flex items-center gap-2">
            <span className="hidden sm:flex">{t("paginationNext")}</span>
            <HiChevronRight />
          </div>
        </Button>
      </div>
    </div>
  );
}

function PaginationNumber({ children }) {
  return <span className="font-bold text-yellow-400">{children}</span>;
}
export default Pagination;
