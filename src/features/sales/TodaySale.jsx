import { USDollar } from "../../utils/helpers";

function TodaySale({ name, price, licenseType, beatName }) {
  return (
    <li className="grid cursor-pointer grid-cols-1 gap-2.5 rounded-md border-l-4 border-l-brand-600 bg-brand-800 p-4 text-brand-50 transition-all hover:border-l-brand-500 hover:bg-brand-700 xl:grid-cols-[1fr_3fr_1fr]">
      <div>
        <span
          className={`mr-4 max-h-6 rounded-md text-xs font-semibold uppercase ${licenseType === "Exclusiva" ? "bg-green-500" : licenseType === "Básica" ? "bg-red-500" : "bg-orange-500"} px-2 py-1`}
        >
          {licenseType}
        </span>
      </div>
      <div>
        <span className="font-semibold text-brand-200">{beatName}</span>
        <span> - {name}</span>
      </div>
      <span className="ml-0 mr-auto max-h-6 rounded-md bg-green-500 px-2 xl:ml-auto xl:mr-0">
        {USDollar.format(price)}
      </span>
    </li>
  );
}

export default TodaySale;
