import { GiMoneyStack } from "react-icons/gi";
import { HiMusicalNote } from "react-icons/hi2";
import { HiMiniPlayCircle } from "react-icons/hi2";
import { HiFire } from "react-icons/hi2";
import Stat from "./Stat";
import {
  formatDate,
  formatNumber,
  getStreak,
  USDollar,
} from "../../utils/helpers";
import { useBeats } from "../beats/useBeats";
import { useSales } from "../sales/useSales";
import { useGetViews } from "../../hooks/useChannelViews";

function Stats() {
  const { beats, isPending } = useBeats();
  const { sales, isPending: isLoadingSales, error } = useSales();
  const { isPending: isLoadingViews, views } = useGetViews();

  let totalSales, salesStreak;

  if (sales) {
    const onlyDates = sales.map((sale) => formatDate(sale.date));
    totalSales = sales.reduce((acc, cur) => acc + cur.amount, 0);
    salesStreak = getStreak(onlyDates);
  }

  if (error) totalSales = 0;

  return (
    <div className="mb-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <Stat
        title="BEATS"
        color="bg-yellow-700 text-yellow-300"
        value={beats?.length}
        icon={<HiMusicalNote />}
        isLoading={isPending}
      />
      <Stat
        title="SALES"
        color="bg-green-700 text-green-300"
        value={USDollar.format(totalSales)}
        icon={<GiMoneyStack />}
        isLoading={isLoadingSales}
      />
      <Stat
        title="STREAMS"
        color="bg-brand-700 text-brand-300"
        value={formatNumber(views)}
        icon={<HiMiniPlayCircle />}
        isLoading={isLoadingViews}
      />
      <Stat
        title="STREAK"
        color="bg-red-700 text-red-300"
        value={`${salesStreak} days`}
        icon={<HiFire />}
        isLoading={isLoadingSales}
      />
    </div>
  );
}

export default Stats;
