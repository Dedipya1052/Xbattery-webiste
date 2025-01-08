

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
import Head from "next/head";



const energyData = {
  november: {
    data: [
      {
        name: "Thermal",
        barName: "Thermal",
        value: 243057,
        percentage: 53.2,
        color: "#4A545D",
        hoverColor: "#2F353D",
      },
      {
        name: "Solar, Wind & Other",
        barName: "Solar, Wind & Oth",
        value: 158552,
        percentage: 34.7,
        color: "#4B9C5E",
        hoverColor: "#3B7A4D",
      },
      {
        name: "Hydro",
        barName: "Hydro",
        value: 46968,
        percentage: 10.3,
        color: "#5B9BD5",
        hoverColor: "#4388B6",
      },
      {
        name: "Nuclear",
        barName: "Nuclear",
        value: 8180,
        percentage: 1.8,
        color: "#7B5C9E",
        hoverColor: "#5E4B7D",
      }
    ],
    total: 456757
  },
  july: {
    data: [
      {
        name: "Thermal",
        barName: "Thermal",
        value: 242996.91,
        percentage: 54.2,
        color: "#4A545D",
        hoverColor: "#2F353D",
      },
      {
        name: "Solar, Wind & Other",
        barName: "Solar, Wind & Oth",
        value: 150276.36,
        percentage: 33.5,
        color: "#4B9C5E",
        hoverColor: "#3B7A4D",
      },
      {
        name: "Hydro",
        barName: "Hydro",
        value: 46928.17,
        percentage: 10.5,
        color: "#5B9BD5",
        hoverColor: "#4388B6",
      },
      {
        name: "Nuclear",
        barName: "Nuclear",
        value: 8180.0,
        percentage: 1.8,
        color: "#7B5C9E",
        hoverColor: "#5E4B7D",
      }
    ],
    total: 448381.44
  },
  august: {
    data: [
      {
        name: "Thermal",
        barName: "Thermal",
        value: 242997,
        percentage: 53.9,
        color: "#4A545D",
        hoverColor: "#2F353D",
      },
      {
        name: "Solar, Wind & Other",
        barName: "Solar, Wind & Oth",
        value: 152654,
        percentage: 33.9,
        color: "#4B9C5E",
        hoverColor: "#3B7A4D",
      },
      {
        name: "Hydro",
        barName: "Hydro",
        value: 46928,
        percentage: 10.4,
        color: "#5B9BD5",
        hoverColor: "#4388B6",
      },
      {
        name: "Nuclear",
        barName: "Nuclear",
        value: 8180,
        percentage: 1.8,
        color: "#7B5C9E",
        hoverColor: "#5E4B7D",
      }
    ],
    total: 450760
  },
  september: {
    data: [
      {
        name: "Thermal",
        barName: "Thermal",
        value: 243057,
        percentage: 53.7,
        color: "#4A545D",
        hoverColor: "#2F353D",
      },
      {
        name: "Solar, Wind & Other",
        barName: "Solar, Wind & Oth",
        value: 154530,
        percentage: 34.1,
        color: "#4B9C5E",
        hoverColor: "#3B7A4D",
      },
      {
        name: "Hydro",
        barName: "Hydro",
        value: 46928,
        percentage: 10.4,
        color: "#5B9BD5",
        hoverColor: "#4388B6",
      },
      {
        name: "Nuclear",
        barName: "Nuclear",
        value: 8180,
        percentage: 1.8,
        color: "#7B5C9E",
        hoverColor: "#5E4B7D",
      }
    ],
    total: 452695
  }
};


const formatNumberIndian = (num) => {
  let [integerPart, decimalPart] = num.toFixed(2).split(".");
  let lastThree = integerPart.slice(-3);
  let otherNumbers = integerPart.slice(0, -3);
  if (otherNumbers !== "") lastThree = "," + lastThree;
  const result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return decimalPart ? result + "." + decimalPart : result;
};

const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 4; // Slightly outside the slice
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#4a5568"
      textAnchor={x > cx ? "start" : "end"} // Align label based on position
      dominantBaseline="central"
      fontSize="10px" // Adjust font size
    >
      {(percent * 100).toFixed(1)}%
    </text>
  );
};


const EnergyContributionDashboard1 = ({month}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(month);
  const currentEnergyData = energyData[selectedMonth].data;

  const monthLabels = {
    july: "July",
    august: "August",
    september: "September",
    november: "November",
  };

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

  const DataTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white text-black border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Energy Source</th>
            <th className="border border-gray-300 px-4 py-2">Capacity (%)</th>
          </tr>
        </thead>
        <tbody>
          {currentEnergyData.map((item) => (
            <tr key={item.name}>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <div className="text-right w-[60px]">
                  {item.percentage}%
                </div>
              </td>
            </tr>
          ))}
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 font-bold">Total</td>
            <td className="border border-gray-300 px-4 py-2 font-bold text-center">
              <div className="text-right w-[60px]">
                100.0%
              </div>
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
    <>
      <Head>
        <title>
          Indian Energy Mix - {monthLabels[selectedMonth]} 2024 | XBattery
        </title>
        <meta
          name="description"
          content={`Discover India's energy mix for ${monthLabels[selectedMonth]} 2024. Explore the contributions of renewable, thermal, nuclear, and hydro energy sources in India's power generation.`}
        />
        <meta
          name="keywords"
          content="Indian Energy Mix, Renewable Energy India, Solar Energy, Wind Energy, Thermal Energy, Hydro Energy, Nuclear Energy, Energy Statistics, XBattery"
        />
        <meta name="author" content="XBattery" />
        <meta
          property="og:title"
          content={`Indian Energy Mix - ${monthLabels[selectedMonth]} 2024 | XBattery`}
        />
        <meta
          property="og:description"
          content={`Explore India's energy contributions for ${monthLabels[selectedMonth]} 2024. Learn about thermal, renewable, hydro, and nuclear energy sources.`}
        />
        <meta property="og:type" content="website" />
        {selectedMonth !== "november" && (
          <meta
            property="og:url"
            content={`https://xbattery.energy/learn/indian-energy-mix-${selectedMonth}-2024`}
          />
        )}
        <meta
          property="og:image"
          content="https://xbattery.energy/images/logo.webp"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        {selectedMonth !== "november" && (
          <link
            rel="canonical"
            href={`https://xbattery.energy/learn/indian-energy-mix-${selectedMonth}-2024`}
          />
        )}
      </Head>

      <div className={`${styles.head1} relative `}>
        <div className="fixed top-32 left-2 w-[120px] hidden lg:block">
          <div className="bg-gray-100 p-2 rounded-md shadow-md">
            <h3 className="text-sm font-semibold text-center mb-2">2024</h3>
            <ul className="space-y-1">
              {[
                {
                  month: "july",
                  displayName: "July",
                  link: "learn/indian-energy-mix-july-2024",
                },
                {
                  month: "august",
                  displayName: "August",
                  link: "learn/indian-energy-mix-august-2024",
                },
                {
                  month: "september",
                  displayName: "September",
                  link: "learn/indian-energy-mix-september-2024",
                },
                {
                  month: "november",
                  displayName: "November",
                  link: "learn/indian-energy-mix",
                },
              ].map(({ month, displayName, link }) => (
                <li key={month}>
                  <a
                    href={`/${link}`}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   setSelectedMonth(month);
                    // }}
                    className={`block text-sm px-2 py-1 rounded-md text-center cursor-pointer ${
                      month === selectedMonth
                        ? "bg-[#777575] text-white font-semibold"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {displayName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.container}>
          <h2 className={styles.title}>
            Indian Energy Mix - {monthLabels[selectedMonth]} 2024
          </h2>
          <div className="text-lg text-center mt-[2rem] mb-[2rem]">
            India's renewable energy mix is steadily growing, with Solar, Wind &
            Other contributing {energyData[selectedMonth].data[1].percentage}%.
            Thermal power remains the largest source at{" "}
            {energyData[selectedMonth].data[0].percentage}%, while Hydro and
            Nuclear account for {energyData[selectedMonth].data[2].percentage}%
            and {energyData[selectedMonth].data[3].percentage}%, respectively,
            reflecting a diverse energy mix as of {monthLabels[selectedMonth]}{" "}
            2024.
          </div>
          {/* <div className="text-lg text-center mt-[2rem] mb-[2rem]">
            As of {monthLabels[selectedMonth]} 2024, India's energy mix includes{" "}
            {energyData[selectedMonth].data[1].percentage}% from renewable
            sources like solar and wind. Thermal power is the largest
            contributor at {energyData[selectedMonth].data[0].percentage}%,
            followed by Hydro at {energyData[selectedMonth].data[2].percentage}%
            and Nuclear at {energyData[selectedMonth].data[3].percentage}%.
          </div> */}

          <div className="mt-[3rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
                      label={renderCustomLabel}
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
                              activeIndex === index
                                ? "scale(1.02)"
                                : "scale(1)",
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
                      wrapperStyle={{
                        paddingLeft: { xs: "12px", xl: "8px" },
                      }}
                      onMouseEnter={(_, index) => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-gray-100 p-1 rounded-xl shadow-xl">
                <h2 className="text-xl font-bold mb-4 text-center p-4">
                  Installed Capacity by Source
                </h2>
                <ResponsiveContainer width="100%" height={310}>
                  {/* <BarChart
                    data={currentEnergyData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis
                      dataKey="barName"
                      stroke="#4a5568"
                      angle={0}
                      textAnchor="middle"
                      height={60}
                      className="text-[10px]"
                      interval={0}
                    />
                    <YAxis
                      stroke="#4a5568"
                      className="text-[12.5px]"
                      tickFormatter={(value) => value.toLocaleString("en-IN")}
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
                      formatter={(value) => value.toLocaleString("en-IN")}
                    />
                    <Bar dataKey="value" name="Capacity (MW)">
                      {currentEnergyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart> */}
                  <BarChart
                    data={currentEnergyData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis
                      dataKey="barName"
                      stroke="#4a5568"
                      angle={0}
                      textAnchor="middle"
                      height={60}
                      className="text-[10px]"
                      interval={0}
                    />
                    <YAxis
                      stroke="#4a5568"
                      className="text-[12.5px]"
                      tickFormatter={(value) => value.toLocaleString("en-IN")}
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
                      formatter={(value) => value.toLocaleString("en-IN")}
                    />
                    <Bar
                      dataKey="value"
                      name="Capacity (MW)"
                      label={({ value, x, y, width }) => {
                        // Calculate percentage and format position
                        const total = currentEnergyData.reduce(
                          (acc, data) => acc + data.value,
                          0
                        );
                        const percentage = ((value / total) * 100).toFixed(1);
                        return (
                          <text
                            x={x + width / 2}
                            y={y - 5} // Position above the bar
                            textAnchor="middle"
                            fill="#4a5568"
                            fontSize="10px"
                          >
                            {percentage}%
                          </text>
                        );
                      }}
                    >
                      {currentEnergyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow-xl w-full lg:w-[85%] mx-auto">
              <h2 className="text-2xl font-bold mb-4">
                Energy Distribution ({monthLabels[selectedMonth]} 2024)
              </h2>
              <DataTable />
            </div>
          </div>
        </div>

        <div className="lg:hidden block">
          <div className=" border-b-[0.8px] border-black mt-[2rem] mb-[3rem]"></div>

          <div className=" w-[120px] mx-auto ">
            <div className="bg-gray-100 p-2 rounded-md shadow-md">
              <h3 className="text-sm font-semibold text-center mb-2">2024</h3>
              <ul className="space-y-1">
                {[
                  {
                    month: "july",
                    displayName: "July",
                    link: "learn/indian-energy-mix-july-2024",
                  },
                  {
                    month: "august",
                    displayName: "August",
                    link: "learn/indian-energy-mix-august-2024",
                  },
                  {
                    month: "september",
                    displayName: "September",
                    link: "learn/indian-energy-mix-september-2024",
                  },
                  {
                    month: "november",
                    displayName: "November",
                    link: "learn/indian-energy-mix",
                  },
                ].map(({ month, displayName, link }) => (
                  <li key={month}>
                    <a
                      href={`/${link}`}
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   setSelectedMonth(month);
                      //   window.scrollTo({ top: 0, behavior: "smooth" });
                      // }}
                      className={`block text-sm px-2 py-1 rounded-md text-center ${
                        month === selectedMonth
                          ? "bg-[#777575] text-white font-semibold"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {displayName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnergyContributionDashboard1;

