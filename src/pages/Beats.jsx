import AddBeat from "../features/beats/AddBeat";
import BeatTable from "../features/beats/BeatTable";
import Heading from "../ui/Heading";

function Beats() {
  return (
    <>
      <Heading color="light">All Beats</Heading>
      <BeatTable />
      <AddBeat />
    </>
  );
}

export default Beats;
