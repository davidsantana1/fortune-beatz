import AddLicense from "../features/licenses/AddLicense";
import LicensesTable from "../features/licenses/LicensesTable";
import Heading from "../ui/Heading";

function Licenses() {
  return (
    <div>
      <Heading color="light">Your Licenses</Heading>
      <LicensesTable />
      <AddLicense />
    </div>
  );
}

export default Licenses;
