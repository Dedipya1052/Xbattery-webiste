import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import styles from "./styles.module.css";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/router";

const fullEnergyData = {
 " Thermal": 242996.91,
  "Solar and Wind": 150276.36,
  "hydro": 46928.17,
  "nuclear": 8180.0,
  "total": 448381.44,
};

// Helper function to add commas in Indian number format
const formatNumberIndian = (num) => {
  let [integerPart, decimalPart] = num.toFixed(2).split(".");
  let lastThree = integerPart.slice(-3);
  let otherNumbers = integerPart.slice(0, -3);
  if (otherNumbers !== "") lastThree = "," + lastThree;
  const result =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return decimalPart ? result + "." + decimalPart : result;
};

const currentEnergyData = [
  {
    name: "Thermal",
    barName: "Thermal",
    value: 242996.91,
    color: "#4A545D",
    hoverColor: "#2F353D",
  },
  {
    name: "Solar and Wind",
    barName: "Solar & Wind",
    value: 150276.36,
    color: "#4B9C5E",
    hoverColor: "#3B7A4D",
  },
  {
    name: "Hydro",
    barName: "Hydro",
    value: 46928.17,
    color: "#5B9BD5",
    hoverColor: "#4388B6",
  },
  {
    name: "Nuclear",
    barName: "Nuclear",
    value: 8180.0,
    color: "#7B5C9E",
    hoverColor: "#5E4B7D",
  },
];

currentEnergyData.forEach((item) => {
  item.percentage = ((item.value / fullEnergyData.total) * 100).toFixed(2);
});

const EnergyContributionDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const router = useRouter();

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 rounded shadow text-black border border-gray-300">
          <p className="font-bold">{data.name}</p>
          <p>{`${formatNumberIndian(data.value)} MW (${data.percentage}%)`}</p>
        </div>
      );
    }
    return null;
  };

  const DataTable = ({ data }) => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white text-black border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Energy Source</th>
            <th className="border border-gray-300 px-4 py-2">Capacity (MW)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => {
            if (key !== "total") {
              return (
                <tr key={key}>
                  <td className="border border-gray-300 px-4 py-2 capitalize">
                    {key}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                  <div className="text-right w-[86px]">
                    {formatNumberIndian(value)}
                    </div>
                  </td>
                </tr>
              );
            }
            return null;
          })}
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 font-bold">Total</td>
            <td className="border border-gray-300 px-4 py-2 font-bold">
              {formatNumberIndian(data.total)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className={styles.head1}>
      <div className={styles.container}>
        <h2 className={styles.title}>Indian Energy Mix</h2>
        <div className="text-lg text-center mt-[2rem] mb-[2rem]">
        India's total power generation capacity stands at 4,48,381.44 MW, with Thermal power contributing 2,42,996.91 MW. Solar & Wind energy at 1,50,276.36 MW, while Hydro and Nuclear energy add 46,928.17 MW and 8,180.00 MW, respectively, showcasing a balanced energy mix as of July 2024.
        </div>

        <div className="mt-[3rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Pie Chart */}
            <div className="bg-gray-100 p-1 rounded-xl shadow-xl flex flex-col items-center justify-center relative">
              <h2 className="text-xl font-bold mb-4 text-center p-4">
                Current Energy Mix
              </h2>

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={currentEnergyData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius="70%"
                    innerRadius="40%"
                    dataKey="value"
                    className="cursor-pointer"
                    onMouseLeave={handleMouseLeave}
                  >
                    {currentEnergyData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          activeIndex === null || activeIndex === index
                            ? entry.color
                            : "gray"
                        }
                        stroke="#e2e8f0"
                        strokeWidth={2}
                        style={{
                          filter:
                            activeIndex === index || activeIndex === null
                              ? "none"
                              : "grayscale(80%)",
                          transform:
                            activeIndex === index ? "scale(1.02)" : "scale(1)",
                          transformOrigin: "center center",
                          transition:
                            "transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1), filter 0.15s ease",
                        }}
                        onMouseEnter={() => handleMouseEnter(index)}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                    onMouseEnter={(_, index) => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="bg-gray-100 p-1 rounded-xl shadow-xl">
              <h2 className="text-xl font-bold mb-4 text-center p-4">
                Installed Capacity by Source
              </h2>
              <ResponsiveContainer width="100%" height={310}>
                <BarChart
                  data={currentEnergyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="barName"
                    stroke="#4a5568"
                    className="text-[10px] mt-3"
                  />
                  <YAxis
                    stroke="#4a5568"
                    className="text-[12.5px]"
                    label={{
                      value: "Megawatts (MW)",
                      angle: -90,
                      position: "insideLeft",
                      offset: -7,
                      fill: "#4a5568",
                      fontSize: 10,
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#f7fafc",
                      border: "none",
                      color: "#1a202c",
                    }}
                    itemStyle={{ color: "#1a202c" }}
                  />
                  <Bar dataKey="value" name="Capacity (MW)">
                    {currentEnergyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              Energy Distribution 
            </h2>
            <DataTable data={fullEnergyData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyContributionDashboard;
