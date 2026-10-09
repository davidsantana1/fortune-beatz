import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import TableItem from "../../ui/TableItem";
import SalesRow from "./SalesRow";
import Error from "../../ui/Error";
import { useSales } from "./useSales";
import { useTranslation } from "react-i18next";

function SalesTable() {
  const { t } = useTranslation();
  const { sales, count, isPending, error } = useSales();

  if (isPending) return <Spinner />;

  if (error) return <Error />;

  return (
    <div className="pb-24">
      <Table count={count}>
        <Table.Header>
          <TableItem>#</TableItem>
          <TableItem>{t("salesTableBeatName")}</TableItem>
          <TableItem>{t("salesTableBuyer")}</TableItem>
          <TableItem>{t("salesTableDate")}</TableItem>
          <TableItem>{t("salesTableLicenseType")}</TableItem>
          <TableItem>{t("salesTablePaymentMethod")}</TableItem>
          <TableItem>{t("salesTableAmount")}</TableItem>
        </Table.Header>
        <Table.Body
          data={sales}
          render={(sale, index) => (
            <SalesRow index={index} sale={sale} key={sale.id} />
          )}
        />
      </Table>
    </div>
  );
}

export default SalesTable;
