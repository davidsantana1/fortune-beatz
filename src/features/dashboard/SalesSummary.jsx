import Heading from "../../ui/Heading";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const startData = [
  {
    type: "Exclusiva",
    value: 3,
    color: "#ef4444",
  },
  {
    type: "Básica",
    value: 9,
    color: "#22c55e",
  },
  {
    type: "Premium",
    value: 5,
    color: "#3b82f6",
  },
  {
    type: "Personalizada",
    value: 2,
    color: "#a855f7",
  },
];

function SalesSummary() {
  return (
    <div className="bg-brand-950 h-80 rounded-md p-6">
      <Heading size="sm" as="h2" margin="minimal">
        Sales Summary
      </Heading>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie data={startData} nameKey="type" dataKey="value" cy="45%">
            {startData.map((entry) => (
              <Cell fill={entry.color} stroke={entry.color} key={entry.type} />
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            align="right"
            width="35%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
          <Tooltip contentStyle={{ backgroundColor: "#eefaff" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesSummary;
