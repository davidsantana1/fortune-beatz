import { useTranslation } from "react-i18next";
import SalesTable from "../features/sales/SalesTable";
import Heading from "../ui/Heading";

function Sales() {
  const { t } = useTranslation();
  return (
    <>
      <Heading color="light">{t("salesTitle")}</Heading>
      <SalesTable />
    </>
  );
}

export default Sales;
