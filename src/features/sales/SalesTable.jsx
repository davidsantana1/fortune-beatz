import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import TableItem from "../../ui/TableItem";
import SalesRow from "./SalesRow";
import Error from "../../ui/Error";
import { useSales } from "./useSales";
import { useTranslation } from "react-i18next";

// const fakeSales = [
//   {
//     name: "Incomprendida",
//     price: 350,
//     date: "Oct 20 2024",
//     buyer: "Miguel Martinez",
//     licenseType: "Exclusive",
//     paymentMethod: "paypal",
//   },
//   {
//     name: "Connect",
//     price: 25,
//     date: "Nov 12 2024",
//     buyer: "Clara Perez",
//     licenseType: "Basic",
//     paymentMethod: "credit",
//   },

//   {
//     name: "Cuarentena",
//     price: 55,
//     date: "Oct 20 2024",
//     buyer: "Miguel Martinez",
//     licenseType: "Premium",
//     paymentMethod: "paypal",
//   },
//   {
//     name: "Horas",
//     price: 500,
//     date: "Dec 14 2024",
//     buyer: "Michael Cruz",
//     licenseType: "Custom",
//     paymentMethod: "credit",
//   },
//   {
//     name: "Tiempo",
//     price: 350,
//     date: "Dec 14 2024",
//     buyer: "Michael Cruz",
//     licenseType: "Exclusive",
//     paymentMethod: "credit",
//   },
//   {
//     name: "Modelo",
//     price: 25,
//     date: "Oct 20 2024",
//     buyer: "Miguel Martinez",
//     licenseType: "Basic",
//     paymentMethod: "paypal",
//   },
// ];

function SalesTable() {
  const { t } = useTranslation();
  const { sales, isPending, error } = useSales();

  if (isPending) return <Spinner />;

  if (error) return <Error />;

  return (
    <Table>
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
          <SalesRow number={index + 1} sale={sale} key={sale.id} />
        )}
      />
    </Table>
  );
}

export default SalesTable;
