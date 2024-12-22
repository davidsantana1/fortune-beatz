import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useSales } from "../sales/useSales";

import { formatDate } from "../../utils/helpers";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";

function SalesChart() {
  const { sales, isPending, error } = useSales();
  const data = [];

  // Create a Map to store total sales per date
  const salesMap = new Map();

  if (sales)
    sales.forEach((sale) => {
      const formattedDate = formatDate(sale.date, {
        month: "short",
        day: "numeric",
      });

      // Check if the date is already in the Map and sum the amounts
      if (salesMap.has(formattedDate)) {
        salesMap.set(formattedDate, salesMap.get(formattedDate) + sale.amount);
      } else {
        salesMap.set(formattedDate, sale.amount);
      }
    });

  // Convert the Map to an array of data
  salesMap.forEach((totalSales, label) => {
    data.push({
      label: label,
      totalSales: totalSales.toFixed(2),
      originalDate: new Date(`${label} 2024`), // Assuming year 2024; adjust if necessary
    });
  });

  // Sort the data array by date (oldest first)
  data.sort((a, b) => a.originalDate - b.originalDate);

  // Optionally, you can remove the originalDate property if not needed
  data.forEach((item) => delete item.originalDate);

  const strokeColor = "#52caff";
  const fillColor = "#2aacff";
  const brandTextColor = "#eefaff";

  return (
    <div className="rounded-md bg-brand-950 p-6">
      {isPending && <Spinner />}
      {error && <Error>Couldn&apos;t get sales data</Error>}
      {sales && (
        <>
          <Heading size="sm" as="h2">
            All Time Sales
          </Heading>
          <ResponsiveContainer height={300} width="100%">
            <AreaChart data={data}>
              <XAxis
                dataKey="label"
                tick={{ fill: brandTextColor }}
                tickLine={{ stroke: strokeColor }}
              />
              <YAxis
                unit="$"
                tick={{ fill: brandTextColor }}
                tickLine={{ stroke: strokeColor }}
              />
              <CartesianGrid strokeDasharray={4} />
              <Tooltip contentStyle={{ backgroundColor: brandTextColor }} />
              <Area
                dataKey="totalSales"
                type="monotone"
                stroke={strokeColor}
                fill={fillColor}
                strokeWidth={2}
                name="Total sales"
                unit="$"
              />
            </AreaChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
}

export default SalesChart;
