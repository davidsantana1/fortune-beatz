import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useLicenses } from "../licenses/useLicenses";
import { useSales } from "../sales/useSales";
import { useTranslation } from "react-i18next";

const colors = [
  "#ef4444",
  "#22c55e",
  "#3b82f6",
  "#f97316",
  "#eab308",
  "#84cc16",
  "#10b981",
  "#64748b",
];

function SalesSummary() {
  const { t } = useTranslation();
  const { licenses, isPending: isPendingLicenses } = useLicenses();
  const { sales, isPending: isPendingSales } = useSales();

  const prepareChartData = () => {
    if (!licenses || !sales) return [];

    const adjustedColors = colors.slice(0, licenses.length);

    return licenses.map((license, index) => {
      const quantitySold = sales.filter(
        (sale) => sale.licenseType === license.name,
      ).length;

      return {
        color: adjustedColors[index],
        value: quantitySold,
        type: license.name,
      };
    });
  };

  const newData = prepareChartData();

  return (
    <div className="h-80 rounded-md bg-brand-900 p-6">
      {(isPendingLicenses || isPendingSales) && <Spinner />}
      {!licenses && !isPendingLicenses && (
        <Empty asDiv={true}>{t("salesSummaryEmpty")}</Empty>
      )}
      {licenses && (
        <>
          <Heading size="sm" as="h2" margin="minimal">
            {t("salesSummaryTitle")}
          </Heading>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie data={newData} nameKey="type" dataKey="value" cy="45%">
                {newData.map((entry) => (
                  <Cell
                    fill={entry.color}
                    stroke={entry.color}
                    key={entry.type}
                  />
                ))}
              </Pie>
              <Legend
                verticalAlign="bottom"
                align="center"
                layout="horizontal"
                iconSize={10}
                iconType="circle"
              />
              <Tooltip contentStyle={{ backgroundColor: "#eefaff" }} />
            </PieChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
}

export default SalesSummary;
