import Heading from "../../ui/Heading";
import TodaySales from "../sales/TodaySales";

function TodayActivity() {
  return (
    <div className="h-80 rounded-md bg-brand-900 p-6">
      <Heading size="sm" as="h2">
        Today
      </Heading>
      <TodaySales />
    </div>
  );
}

export default TodayActivity;
