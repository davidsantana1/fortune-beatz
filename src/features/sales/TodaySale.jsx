import { Link } from "react-router-dom";
import { USDollar } from "../../utils/helpers";

function TodaySale({ name, price, licenseType, beatName }) {
  return (
    <Link to="/sales">
      <li className="grid cursor-pointer grid-cols-1 gap-2.5 rounded-md border-l-4 border-l-brand-500 bg-brand-700 p-4 text-brand-50 transition-all hover:border-l-brand-400 hover:bg-brand-600 xl:grid-cols-[1.2fr_3fr_1fr]">
        <div>
          <span
            className={`mr-4 max-h-6 rounded-md bg-orange-500 px-2 py-1 text-xs font-semibold uppercase`}
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
    </Link>
  );
}

export default TodaySale;
