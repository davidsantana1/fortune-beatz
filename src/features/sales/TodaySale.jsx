import { USDollar } from "../../utils/helpers";

function TodaySale({ name, flagUrl, price, beatName }) {
  return (
    <li className="flex cursor-pointer gap-2.5 rounded-md border-l-4 border-l-brand-600 bg-brand-800 p-4 text-brand-50 transition-all hover:border-l-brand-500 hover:bg-brand-700">
      <div>
        <span className="font-semibold text-brand-200">{beatName}</span>
        <span> - {name}</span>
      </div>
      <img src={flagUrl} alt="Dominican flag" className="h-6" />
      <span className="max-h-6 rounded-md bg-green-500 px-2">
        {USDollar.format(price)}
      </span>
    </li>
  );
}

export default TodaySale;
