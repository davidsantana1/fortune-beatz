import Table from "../../ui/Table";
import TableItem from "../../ui/TableItem";
import { useLicenses } from "./useLicenses";
import Spinner from "../../ui/Spinner";
import LicenseRow from "./LicenseRow";

function LicensesTable() {
  const { isPending, licenses } = useLicenses();

  if (isPending) return <Spinner />;

  return (
    <Table>
      <Table.Header>
        <TableItem>#</TableItem>
        <TableItem>Name</TableItem>
        <TableItem>Price</TableItem>
        <TableItem>Music Videos</TableItem>
        <TableItem>Copies</TableItem>
        <TableItem>Streams</TableItem>
        <TableItem>Profit Live Performances</TableItem>
        <TableItem>Radio Stations</TableItem>
        <TableItem></TableItem>
      </Table.Header>
      <Table.Body
        data={licenses}
        render={(license, index) => (
          <LicenseRow number={index + 1} license={license} key={license.id} />
        )}
      />
    </Table>
  );
}

export default LicensesTable;
