import Table from "../../ui/Table";
import TableItem from "../../ui/TableItem";
import BeatRow from "./BeatRow";
import { useBeats } from "./useBeats";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";

function BeatTable() {
  const { isPending, beats, error } = useBeats();

  if (isPending) return <Spinner />;
  if (error) return <Error errorMessage={error.message} />;

  return (
    <Table>
      <Table.Header>
        <TableItem isImage={true}></TableItem>
        <TableItem>Name</TableItem>
        <TableItem>Artist Type</TableItem>
        <TableItem>Genre</TableItem>
        <TableItem>Time</TableItem>
        <TableItem>BPM</TableItem>
        <TableItem>Key</TableItem>
        <TableItem className="w-2">Actions</TableItem>
      </Table.Header>
      <Table.Body
        data={beats}
        render={(beat) => <BeatRow beat={beat} key={beat.id} />}
      />
    </Table>
  );
}

export default BeatTable;
