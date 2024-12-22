import TodaySale from "./TodaySale";
import Error from "../../ui/Error";
import Spinner from "../../ui/Spinner";
import { useSales } from "../sales/useSales";
import { formatDate } from "../../utils/helpers";

function TodaySales() {
  const { sales, isPending, error } = useSales();

  if (isPending) return <Spinner />;
  if (error) return <Error>{error.message}</Error>;

  const todaySales = sales.filter(
    (sale) => formatDate(sale.date) === formatDate(new Date()) && sale,
  );

  return (
    <ul className="flex max-h-56 flex-col gap-3 overflow-y-auto">
      {!sales && !isPending && !error && (
        <p className="text-xl font-medium text-brand-200">
          No activity today...
        </p>
      )}
      {todaySales &&
        todaySales.map((sale) => (
          <TodaySale
            key={sale.id}
            beatName={sale.beatName}
            name={sale.buyer}
            price={sale.amount}
            licenseType={sale.licenseType}
          />
        ))}
    </ul>
  );
}

export default TodaySales;
