import TodayActivity from "./TodayActivity";
import Stats from "./Stats";
import SalesSummary from "./SalesSummary";
import SalesChart from "./SalesChart";
import { useAudioPlayer } from "../../context/AudioPlayerContext";

function DashboardLayout() {
  const { nowPlaying } = useAudioPlayer();
  return (
    <div className={`grid grid-cols-1 ${nowPlaying && "pb-32"}`}>
      <Stats />
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <TodayActivity />
        <SalesSummary />
      </div>
      <SalesChart />
    </div>
  );
}

export default DashboardLayout;
