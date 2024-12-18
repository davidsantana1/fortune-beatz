import SalesTable from "../features/sales/SalesTable";
import Heading from "../ui/Heading";

function Sales() {
  return (
    <>
      <Heading color="light">All Sales</Heading>
      <SalesTable />
    </>
  );
}

export default Sales;
