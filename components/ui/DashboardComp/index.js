

import React, { useState, useEffect, useRef } from "react";
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

  july: {
    data: [
      {
        name: "Thermal",
        barName: "Thermal",
        value: 243560.32,
        percentage: 49.70,
        color: "#4A545D",
        hoverColor: "#2F353D",
      },
      {
        name: "Solar, Wind & Other",
        barName: "Solar, Wind & Oth",
        value: 187693.37,
        percentage: 38.30,
        color: "#4B9C5E",
        hoverColor: "#3B7A4D",
      },
      {
        name: "Hydro",
        barName: "Hydro",
        value: 49496.16,
        percentage: 10.10,
        color: "#5B9BD5",
        hoverColor: "#4388B6",
      },
      {
        name: "Nuclear",
        barName: "Nuclear",
        value: 8811.10,
        percentage: 1.80,
        color: "#7B5C9E",
        hoverColor: "#5E4B7D",
      }
    ],
    total: 490061
  },
  june: {
    data: [
      {
        name: "Thermal",
        barName: "Thermal",
        value: 243009.41,
        percentage: 50.00,
        color: "#4A545D",
        hoverColor: "#2F353D",
      },
      {
        name: "Solar, Wind & Other",
        barName: "Solar, Wind & Oth",
        value: 184638.15,
        percentage: 37.99,
        color: "#4B9C5E",
        hoverColor: "#3B7A4D",
      },
      {
        name: "Hydro",
        barName: "Hydro",
        value: 49622.04,
        percentage: 10.21,
        color: "#5B9BD5",
        hoverColor: "#4388B6",
      },
      {
        name: "Nuclear",
        barName: "Nuclear",
        value: 8749.22,
        percentage: 1.81,
        color: "#7B5C9E",
        hoverColor: "#5E4B7D",
      }
    ],
    total: 486018.82
  },
  may: {
    data: [
      {
        name: "Thermal",
        barName: "Thermal",
        value: 240077.84,
        percentage: 50.48,
        color: "#4A545D",
        hoverColor: "#2F353D",
      },
      {
        name: "Solar, Wind & Other",
        barName: "Solar, Wind & Oth",
        value: 178821.84,
        percentage: 37.60,
        color: "#4B9C5E",
        hoverColor: "#3B7A4D",
      },
      {
        name: "Hydro",
        barName: "Hydro",
        value: 47939.47,
        percentage: 10.08,
        color: "#5B9BD5",
        hoverColor: "#4388B6",
      },
      {
        name: "Nuclear",
        barName: "Nuclear",
        value: 8751.85,
        percentage: 1.85,
        color: "#7B5C9E",
        hoverColor: "#5E4B7D",
      }
    ],
    total: 475590
  },
  april: {
    data: [
      {
        name: "Thermal",
        barName: "Thermal",
        value: 249844.64,
        percentage: 51.42,
        color: "#4A545D",
        hoverColor: "#2F353D",
      },
      {
        name: "Solar, Wind & Other",
        barName: "Solar, Wind & Oth",
        value: 180089.17,
        percentage: 37.08,
        color: "#4B9C5E",
        hoverColor: "#3B7A4D",
      },
      {
        name: "Hydro",
        barName: "Hydro",
        value: 46888.59,
        percentage: 9.65,
        color: "#5B9BD5",
        hoverColor: "#4388B6",
      },
      {
        name: "Nuclear",
        barName: "Nuclear",
        value: 9067.60,
        percentage: 1.85,
        color: "#7B5C9E",
        hoverColor: "#5E4B7D",
      }
    ],
    total: 485890
  },
  march: {
    data: [
      {
        name: "Thermal",
        barName: "Thermal",
        value: 250247.67,
        percentage: 52.15,
        color: "#4A545D",
        hoverColor: "#2F353D",
      },
      {
        name: "Solar, Wind & Other",
        barName: "Solar, Wind & Oth",
        value: 173992.76,
        percentage: 36.23,
        color: "#4B9C5E",
        hoverColor: "#3B7A4D",
      },
      {
        name: "Hydro",
        barName: "Hydro",
        value: 47400.18,
        percentage: 9.87,
        color: "#5B9BD5",
        hoverColor: "#4388B6",
      },
      {
        name: "Nuclear",
        barName: "Nuclear",
        value: 8604.39,
        percentage: 1.75,
        color: "#7B5C9E",
        hoverColor: "#5E4B7D",
      }
    ],
    total: 480245
  },
  february: {
   data: [
      {
        name: "Thermal",
        barName: "Thermal",
        value: 242997,
        percentage: 52.6,
        color: "#4A545D",
        hoverColor: "#2F353D",
      },
      {
        name: "Solar, Wind & Other",
        barName: "Solar, Wind & Oth",
        value: 164703,
        percentage: 35.6,
        color: "#4B9C5E",
        hoverColor: "#3B7A4D",
      },
      {
        name: "Hydro",
        barName: "Hydro",
        value: 46715,
        percentage: 10.1,
        color: "#5B9BD5",
        hoverColor: "#4388B6",
      },
      {
        name: "Nuclear",
        barName: "Nuclear",
        value: 7900,
        percentage: 1.7,
        color: "#7B5C9E",
        hoverColor: "#5E4B7D",
      }
    ],
    total: 462315
  },
  january: {
    "data": [
      {
        "name": "Thermal",
        "barName": "Thermal",
        "value": 243687,
        "percentage": 52.75,
        "color": "#4A545D",
        "hoverColor": "#2F353D"
      },
      {
        "name": "Solar, Wind & Other",
        "barName": "Solar, Wind & Oth",
        "value": 163514,
        "percentage": 35.35,
        "color": "#4B9C5E",
        "hoverColor": "#3B7A4D"
      },
      {
        "name": "Hydro",
        "barName": "Hydro",
        "value": 46842,
        "percentage": 10.15,
        "color": "#5B9BD5",
        "hoverColor": "#4388B6"
      },
      {
        "name": "Nuclear",
        "barName": "Nuclear",
        "value": 8040,
        "percentage": 1.75,
        "color": "#7B5C9E",
        "hoverColor": "#5E4B7D"
      }
    ],
    "total": 462083
  },
  december: {
    data: [
      {
        name: "Thermal",
        barName: "Thermal",
        value: 244377,
        percentage: 52.9,
        color: "#4A545D",
        hoverColor: "#2F353D",
      },
      {
        name: "Solar, Wind & Other",
        barName: "Solar, Wind & Oth",
        value: 162324,
        percentage: 35.1,
        color: "#4B9C5E",
        hoverColor: "#3B7A4D",
      },
      {
        name: "Hydro",
        barName: "Hydro",
        value: 46968,
        percentage: 10.2,
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
    total: 462002
  },
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
  july2024: {
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

const determineYear = (month) => {
  const monthsIn2024 = ['july2024', 'august', 'september', 'november', 'december'];
  return monthsIn2024.includes(month) ? 2024 : 2025;
};


const EnergyContributionDashboard1 = ({monthKey}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(monthKey);
  const currentYear = determineYear(selectedMonth);
  const currentEnergyData = energyData[selectedMonth].data;
  const selectedItemRef = useRef(null);
  const sidebarRef = useRef(null);
  const [sidebarOffset, setSidebarOffset] = useState(0);

  const monthLabels = {
    july: "July",
    august: "August",
    september: "September",
    november: "November",
    december: "December",
    january:"January",
    february:"February",
    march: "March",
    april: "April",
    may: "May",
    june: "June"
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
                  {item.percentage.toFixed(2)}%
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



  useEffect(() => {
    if (selectedItemRef.current) {
      try {
        selectedItemRef.current.scrollIntoView({ block: "center", behavior: "instant" });
      } catch (_) {
        selectedItemRef.current.scrollIntoView({ block: "center" });
      }
    }
  }, []);

  // Prevent overlap with footer for fixed sidebar via translateY lift
  useEffect(() => {
    const footerEl = document.getElementById("site-footer");
    const sidebarEl = sidebarRef.current;
    if (!footerEl || !sidebarEl) return;

    const computeOffset = () => {
      const sidebarRect = sidebarEl.getBoundingClientRect();
      const footerRect = footerEl.getBoundingClientRect();
      const gap = 16; // px gap above footer
      const overlap = sidebarRect.bottom + gap - footerRect.top;
      const next = overlap > 0 ? overlap : 0;
      setSidebarOffset((prev) => (prev !== next ? next : prev));
    };

    computeOffset();
    window.addEventListener("scroll", computeOffset, { passive: true });
    window.addEventListener("resize", computeOffset);
    return () => {
      window.removeEventListener("scroll", computeOffset);
      window.removeEventListener("resize", computeOffset);
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          Indian Energy Mix - {monthLabels[selectedMonth]} {currentYear} | XBattery
        </title>
        <meta
          name="description"
          content={`Discover India's energy mix for ${monthLabels[selectedMonth]} ${currentYear}. Explore the contributions of renewable, thermal, nuclear, and hydro energy sources in India's power generation.`}
        />
        <meta
          name="keywords"
          content="Indian Energy Mix, Renewable Energy India, Solar Energy, Wind Energy, Thermal Energy, Hydro Energy, Nuclear Energy, Energy Statistics, XBattery"
        />
        <meta name="author" content="XBattery" />
        <meta
          property="og:title"
          content={`Indian Energy Mix - ${monthLabels[selectedMonth]} ${currentYear} | XBattery`}
        />
        <meta
          property="og:description"
          content={`Explore India's energy contributions for ${monthLabels[selectedMonth]} ${currentYear}. Learn about thermal, renewable, hydro, and nuclear energy sources.`}
        />
        <meta property="og:type" content="website" />
        {selectedMonth === "july" ? (
          <meta
            property="og:url"
            content="https://xbattery.energy/learn/indian-energy-mix"
          />
        ) : selectedMonth !== "november" && selectedMonth !== "july2024" && (
          <meta
            property="og:url"
            content={`https://xbattery.energy/learn/indian-energy-mix-${selectedMonth}-${currentYear}`}
          />
        )}
        <meta
          property="og:image"
          content="https://xbattery.energy/images/logo.webp"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        {selectedMonth === "july" ? (
          <link
            rel="canonical"
            href="https://xbattery.energy/learn/indian-energy-mix"
          />
        ) : selectedMonth !== "november" && selectedMonth !== "july2024" && (
          <link
            rel="canonical"
            href={`https://xbattery.energy/learn/indian-energy-mix-${selectedMonth}-${currentYear}`}
          />
        )}
      </Head>

      <div className={`${styles.head1} relative lg:flex lg:items-start lg:gap-6`}>
        <div
          ref={sidebarRef}
          className="fixed left-2 w-[120px] hidden lg:block"
          style={{ top: "6rem", transform: `translateY(-${sidebarOffset}px)`, transition: "transform 200ms ease" }}
          id="month-sidebar"
        >
          <div className="bg-gray-100 p-2 rounded-md shadow-md max-h-[300px] overflow-y-auto pb-4">
            <h3 className="text-sm font-semibold text-center mb-2 sticky top-0 bg-gray-100 z-10">2025</h3>
            <ul className="space-y-1">
              {[
                {
                  month: "january",
                  monthKey: "january",
                  displayName: "January",
                  link: "learn/indian-energy-mix-january-2025",
                },
                {
                  month: "february",
                  monthKey: "february",
                  displayName: "February",
                  link: "learn/indian-energy-mix-february-2025",
                },
                {
                  month: "march",
                  monthKey: "march",
                  displayName: "March",
                  link: "learn/indian-energy-mix-march-2025",
                },
                {
                  month: "april",
                  monthKey: "april",
                  displayName: "April",
                  link: "learn/indian-energy-mix-april-2025",
                },
                {
                  month: "may",
                  monthKey: "may",
                  displayName: "May",
                  link: "learn/indian-energy-mix-may-2025",
                },
                {
                  month: "june",
                  monthKey: "june",
                  displayName: "June",
                  link: "learn/indian-energy-mix-june-2025",
                },
                {
                  month: "july",
                  monthKey: "july",
                  displayName: "July",
                  link: "learn/indian-energy-mix",
                },
              ].map(({ month, monthKey, displayName, link }) => (
                <li key={month}>
                  <a
                    href={`/${link}`}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   setSelectedMonth(month);
                    // }}
                    ref={monthKey === selectedMonth ? selectedItemRef : null}
                    className={`block text-sm px-2 py-1 rounded-md text-center cursor-pointer whitespace-nowrap ${
                      (monthKey === selectedMonth && currentYear === 2025)
                        ? "bg-[#777575] text-white font-semibold"
                        : "bg-gray-200 text-gray-600"
                    }`}
                    title={displayName}
                  >
                    {displayName}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-center mb-2 mt-3 sticky top-0 bg-gray-100 z-10">
              2024
            </h3>
            <ul className="space-y-1">
              {[
                {
                  month: "july",
                  monthKey: "july2024",
                  displayName: "July",
                  link: "learn/indian-energy-mix-july-2024",
                },
                {
                  month: "august",
                  monthKey: "august",
                  displayName: "August",
                  link: "learn/indian-energy-mix-august-2024",
                },
                {
                  month: "september",
                  monthKey: "september",
                  displayName: "September",
                  link: "learn/indian-energy-mix-september-2024",
                },
                {
                  month: "november",
                  monthKey: "november",
                  displayName: "November",
                  link: "learn/indian-energy-mix-november-2024",
                },
                {
                  month: "december",
                  monthKey: "december",
                  displayName: "December",
                  link: "learn/indian-energy-mix-december-2024",
                },
              ].map(({ month, monthKey, displayName, link }) => (
                <li key={month}>
                  <a
                    href={`/${link}`}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   setSelectedMonth(month);
                    // }}
                    ref={monthKey === selectedMonth ? selectedItemRef : null}
                    className={`block text-sm px-2 py-1 rounded-md text-center cursor-pointer ${
                      (monthKey === selectedMonth && currentYear === 2024)
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
          <h1 className={styles.title}>
            Indian Energy Mix - {monthLabels[selectedMonth]} {currentYear}
          </h1>
          <div className="text-lg text-center mt-[2rem] mb-[2rem]">
            {energyData[selectedMonth].data[1].percentage > 0 ? (
              <>
                India's renewable energy mix is steadily growing, with Solar, Wind &
                Other contributing {energyData[selectedMonth].data[1].percentage}%.
                Thermal power remains the largest source at{" "}
                {energyData[selectedMonth].data[0].percentage}%, while Hydro and
                Nuclear account for {energyData[selectedMonth].data[2].percentage}%
                and {energyData[selectedMonth].data[3].percentage}%, respectively,
                reflecting a diverse energy mix as of {monthLabels[selectedMonth]}{" "}
                {currentYear}.
              </>
            ) : (
              <>
                India's energy mix shows Thermal power as the dominant source at{" "}
                {energyData[selectedMonth].data[0].percentage}%, with Hydro and
                Nuclear contributing {energyData[selectedMonth].data[2].percentage}%
                and {energyData[selectedMonth].data[3].percentage}%, respectively.
                Solar, Wind & Other sources show minimal contribution at{" "}
                {energyData[selectedMonth].data[1].percentage}%, reflecting the
                seasonal energy patterns as of {monthLabels[selectedMonth]}{" "}
                {currentYear}.
              </>
            )}
          </div>

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
                Energy Distribution ({monthLabels[selectedMonth]} {currentYear}{" "}
                )
              </h2>
              <DataTable />
            </div>
          </div>
        </div>

        <div className="lg:hidden block">
          <div className=" border-b-[0.8px] border-black mt-[2rem] mb-[3rem]"></div>

          <div className=" w-[120px] mx-auto ">
            <div className="bg-gray-100 p-2 rounded-md shadow-md">
              <h3 className="text-sm font-semibold text-center mb-2">2025</h3>
              <ul className="space-y-1">
                {[
                  {
                    month: "january",
                    monthKey: "january",
                    displayName: "January",
                    link: "learn/indian-energy-mix-january-2025",
                  },
                  {
                    month: "february",
                    monthKey: "february",
                    displayName: "February",
                    link: "learn/indian-energy-mix-february-2025",
                  },
                  {
                    month: "march",
                    monthKey: "march",
                    displayName: "March",
                    link: "learn/indian-energy-mix-march-2025",
                  },
                  {
                    month: "april",
                    monthKey: "april",
                    displayName: "April",
                    link: "learn/indian-energy-mix-april-2025",
                  },
                  {
                    month: "may",
                    monthKey: "may",
                    displayName: "May",
                    link: "learn/indian-energy-mix-may-2025",
                  },
                  {
                    month: "june",
                    monthKey: "june",
                    displayName: "June",
                    link: "learn/indian-energy-mix-june-2025",
                  },
                  {
                    month: "july",
                    monthKey: "july",
                    displayName: "July",
                    link: "learn/indian-energy-mix",
                  },
                ].map(({ month, monthKey, displayName, link }) => (
                  <li key={month}>
                    <a
                      href={`/${link}`}
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   setSelectedMonth(month);
                      //   window.scrollTo({ top: 0, behavior: "smooth" });
                      // }}
                      className={`block text-sm px-2 py-1 rounded-md text-center whitespace-nowrap ${
                        (monthKey === selectedMonth && currentYear === 2025)
                          ? "bg-[#777575] text-white font-semibold"
                          : "bg-gray-200 text-gray-600"
                      }`}
                      title={displayName}
                    >
                      {displayName}
                    </a>
                  </li>
                ))}
              </ul>
              <h3 className="text-sm font-semibold text-center mb-2">2024</h3>
              <ul className="space-y-1">
                {[
                  {
                    month: "july",
                    monthKey: "july2024",
                    displayName: "July",
                    link: "learn/indian-energy-mix-july-2024",
                  },
                  {
                    month: "august",
                    monthKey: "august",
                    displayName: "August",
                    link: "learn/indian-energy-mix-august-2024",
                  },
                  {
                    month: "september",
                    monthKey: "september",
                    displayName: "September",
                    link: "learn/indian-energy-mix-september-2024",
                  },
                  {
                    month: "november",
                    monthKey: "november",
                    displayName: "November",
                    link: "learn/indian-energy-mix-november-2024",
                  },
                  {
                    month: "december",
                    monthKey: "december",
                    displayName: "December",
                    link: "learn/indian-energy-mix-december-2024",
                  },
                ].map(({ month, monthKey, displayName, link }) => (
                  <li key={month}>
                    <a
                      href={`/${link}`}
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   setSelectedMonth(month);
                      //   window.scrollTo({ top: 0, behavior: "smooth" });
                      // }}
                      className={`block text-sm px-2 py-1 rounded-md text-center whitespace-nowrap ${
                        (monthKey === selectedMonth && currentYear === 2024)
                          ? "bg-[#777575] text-white font-semibold"
                          : "bg-gray-200 text-gray-600"
                      }`}
                      title={displayName}
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

