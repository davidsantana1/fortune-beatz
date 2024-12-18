import { GiMoneyStack } from "react-icons/gi";
import { HiMusicalNote } from "react-icons/hi2";
import { HiMiniPlayCircle } from "react-icons/hi2";
import { HiFire } from "react-icons/hi2";
import Stat from "./Stat";
import { USDollar } from "../../utils/helpers";

function Stats() {
  return (
    <div className="mb-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <Stat
        title="BEATS"
        color="bg-yellow-700 text-yellow-300"
        value="58"
        icon={<HiMusicalNote />}
      />
      <Stat
        title="SALES"
        color="bg-green-700 text-green-300"
        value={USDollar.format(4500)}
        icon={<GiMoneyStack />}
      />
      <Stat
        title="STREAMS"
        color="bg-brand-700 text-brand-300"
        value="18,742"
        icon={<HiMiniPlayCircle />}
      />
      <Stat
        title="STREAK"
        color="bg-red-700 text-red-300"
        value="8 days"
        icon={<HiFire />}
      />
    </div>
  );
}

export default Stats;
