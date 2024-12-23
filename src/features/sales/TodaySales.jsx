import TodaySale from "./TodaySale";
import Error from "../../ui/Error";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import { useSales } from "../sales/useSales";
import { formatDate } from "../../utils/helpers";
import { useTranslation } from "react-i18next";

function TodaySales() {
  const { t } = useTranslation();
  const { sales, isPending, error } = useSales(true);

  if (isPending) return <Spinner />;
  if (error) return <Error>{error.message}</Error>;

  const todaySales = sales.filter(
    (sale) => formatDate(sale.date) === formatDate(new Date()) && sale,
  );

  if (todaySales.length === 0)
    return <Empty asDiv={true}>{t("todayActivityEmpty")}.</Empty>;

  return (
    <ul className="flex max-h-56 flex-col gap-3 overflow-y-auto">
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
