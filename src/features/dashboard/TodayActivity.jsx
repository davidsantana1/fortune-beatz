import Heading from "../../ui/Heading";
import TodaySales from "../sales/TodaySales";

function TodayActivity() {
  return (
    <div className="bg-brand-950 h-80 rounded-md p-6">
      <Heading size="sm" as="h2">
        Today
      </Heading>
      {/* <p className="text-xl font-medium text-brand-200">No activity today...</p> */}
      <TodaySales />
    </div>
  );
}

export default TodayActivity;
