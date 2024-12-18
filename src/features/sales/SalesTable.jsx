import Table from "../../ui/Table";
import TableItem from "../../ui/TableItem";
import SalesRow from "./SalesRow";

const fakeSales = [
  {
    name: "Hola",
    price: 350,
    date: "Oct 20 2024",
    buyer: "Miguel Martinez",
    licenseType: "Exclusive",
    paymentMethod: "paypal",
  },
  {
    name: "Adios",
    price: 25,
    date: "Nov 12 2024",
    buyer: "Clara Perez",
    licenseType: "Basic",
    paymentMethod: "credit",
  },

  {
    name: "Hola",
    price: 55,
    date: "Oct 20 2024",
    buyer: "Miguel Martinez",
    licenseType: "Premium",
    paymentMethod: "paypal",
  },
  {
    name: "Bye",
    price: 500,
    date: "Dec 14 2024",
    buyer: "Michael Cruz",
    licenseType: "Custom",
    paymentMethod: "credit",
  },
  {
    name: "Bye",
    price: 350,
    date: "Dec 14 2024",
    buyer: "Michael Cruz",
    licenseType: "Exclusive",
    paymentMethod: "credit",
  },
  {
    name: "Hola",
    price: 25,
    date: "Oct 20 2024",
    buyer: "Miguel Martinez",
    licenseType: "Basic",
    paymentMethod: "paypal",
  },
];

function SalesTable() {
  return (
    <Table>
      <Table.Header>
        <TableItem>Beat Name</TableItem>
        <TableItem>Buyer</TableItem>
        <TableItem>Date</TableItem>
        <TableItem>License Type</TableItem>
        <TableItem>Payment Method</TableItem>
        <TableItem>Amount</TableItem>
      </Table.Header>
      <Table.Body
        data={fakeSales}
        render={(sale) => <SalesRow sale={sale} key={sale.name} />}
      />
    </Table>
  );
}

export default SalesTable;
