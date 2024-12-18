import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Heading from "../../ui/Heading";

const fakeData = [
  {
    label: "Jan 09",
    totalSales: 400,
  },
  {
    label: "Jan 10",
    totalSales: 426,
  },
  {
    label: "Jan 14",
    totalSales: 245,
  },
  {
    label: "Jan 24",
    totalSales: 333,
  },
  {
    label: "Jan 26",
    totalSales: 503,
  },
  {
    label: "Jan 30",
    totalSales: 426,
  },
];

function SalesChart() {
  const strokeColor = "#52caff";
  const fillColor = "#2aacff";
  const brandTextColor = "#eefaff";

  return (
    <div className="bg-brand-950 rounded-md p-6">
      <Heading size="sm" as="h2">
        Sales from Dec 08 2024 — Dec 14 2024
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={fakeData}>
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
    </div>
  );
}

export default SalesChart;
