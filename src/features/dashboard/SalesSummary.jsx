import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useLicenses } from "../licenses/useLicenses";

const startData = [
  {
    value: 3,
    color: "#ef4444",
  },
  {
    value: 9,
    color: "#22c55e",
  },
  {
    value: 5,
    color: "#3b82f6",
  },
  {
    value: 2,
    color: "#a855f7",
  },
];

function SalesSummary() {
  const { licenses, isPending } = useLicenses();

  let newData = {};

  if (!isPending) {
    newData = startData.map((obj, index) => {
      const license = licenses[index];

      if (!licenses[index]) return {};

      return {
        ...obj,
        type: license?.name,
      };
    });
  }

  return (
    <div className="h-80 rounded-md bg-brand-950 p-6">
      {(!licenses || isPending) && <Spinner />}
      {licenses && (
        <>
          <Heading size="sm" as="h2" margin="minimal">
            Sales Summary
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
