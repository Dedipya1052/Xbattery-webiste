import React, { useState, useEffect } from 'react';
import { Plus, Minus, Sun, Zap, Home, Thermometer, Battery, IndianRupee, Calendar } from 'lucide-react';

const SolarPanelIcon = ({ x, y }) => (
  <svg x={x} y={y} width="10" height="6" viewBox="0 0 12 8">
    <rect width="12" height="8" fill="#4a90e2" stroke="#2980b9" strokeWidth="0.5" />
    <line x1="4" y1="0" x2="4" y2="8" stroke="#2980b9" strokeWidth="0.25" />
    <line x1="8" y1="0" x2="8" y2="8" stroke="#2980b9" strokeWidth="0.25" />
    <line x1="0" y1="4" x2="12" y2="4" stroke="#2980b9" strokeWidth="0.25" />
  </svg>
);

const StatItem = ({ icon: Icon, label, value, unit }) => (
  <div className="flex items-center justify-between border-b border-gray-700 py-1">
    <div className="flex items-center">
      <Icon size={16} className="mr-1 text-yellow-500" />
      <span className="text-xs">{label}</span>
    </div>
    <span className="font-semibold text-sm">
      {['Daily Savings', 'Yearly Savings'].includes(label) ? value : value}
      <span className="text-xs text-gray-400"> {unit}</span>
    </span>
  </div>
);

const CompleteSolarCalculator = () => {
  const [panelCount, setPanelCount] = useState(0);
  const [results, setResults] = useState({
    panels: 0,
    totalPower: 0,
    electricityPerDay: 0,
    electricityPerMonth: 0,
    dailySavings: 0,
    areaCovered: 0,
    co2Reduced: 0,
    yearlySavings: 0,
  });

  const PANEL_WATTAGE = 540; // Watts
  const ENERGY_RATE = 8; // ₹/kWh
  const AVERAGE_SUN_HOURS = 5; // hours per day
  const MAX_PANELS = 40;

  useEffect(() => {
    const totalPower = panelCount * PANEL_WATTAGE / 1000; // kW
    const electricityPerDay = totalPower * AVERAGE_SUN_HOURS; // kWh/day
    const electricityPerMonth = electricityPerDay * 30; // kWh/month
    const dailySavings = electricityPerDay * ENERGY_RATE; // ₹/day
    const areaCovered = panelCount * 2.5; // m² (assuming 2.5m² per 540W panel)
    const co2Reduced = electricityPerDay * 0.82; // kg/day (assuming 0.82 kg CO2 per kWh for India)
    const yearlySavings = dailySavings * 365; // ₹/year

    setResults({
      panels: panelCount,
      totalPower: Math.round(totalPower),
      electricityPerDay: Math.round(electricityPerDay),
      electricityPerMonth: Math.round(electricityPerMonth),
      dailySavings: Math.round(dailySavings),
      areaCovered: Math.round(areaCovered),
      co2Reduced: Math.round(co2Reduced),
      yearlySavings: Math.round(yearlySavings),
    });
  }, [panelCount]);

  const handleAddPanel = () => {
    if (panelCount < MAX_PANELS) setPanelCount(prevCount => prevCount + 1);
  };

  const handleRemovePanel = () => {
    if (panelCount > 0) setPanelCount(prevCount => prevCount - 1);
  };

  const formatRupees = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    // <div className="p-3 max-w-md md:max-w-[450px] mx-auto bg-gray-800 rounded-xl shadow-lg text-white  overflow-y-auto mb-[-2rem]">
    //   <h2 className="text-lg font-bold mb-2 text-center">
    //     Indian Solar Calculator
    //   </h2>

    //   <div
    //     className="mb-3 rounded relative"
    //     style={{ height: "250px", overflow: "hidden" }}
    //   >
    //     <img
    //       src="/images/solar.jpg"
    //       alt="House with solar panels"
    //       className="absolute inset-0 w-full h-full object-cover scale-[1.3]"
    //     />
    //     <svg
    //       width="100%"
    //       height="100%"
    //       viewBox="0 0 400 200"
    //       style={{ position: "absolute", top: 43, right: 25 }}
    //     >
    //       {[...Array(panelCount)].map((_, index) => (
    //         <SolarPanelIcon
    //           key={index}
    //           x={100 + (index % 20) * 12} // 20 panels per row
    //           y={40 + Math.floor(index / 20) * 8} // Move to the next row after 20 panels
    //         />
    //       ))}
    //     </svg>
    //   </div>

    //   <div className="flex justify-between items-center mb-3 bg-gray-700 p-1 rounded">
    //     <button
    //       className="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
    //       onClick={handleAddPanel}
    //       disabled={panelCount >= MAX_PANELS}
    //     >
    //       <Plus size={16} />
    //     </button>
    //     <div className="text-lg font-bold flex items-center">
    //       <Sun className="text-yellow-400 mr-1" size={20} />
    //       {panelCount} Panels
    //     </div>
    //     <button
    //       className="bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
    //       onClick={handleRemovePanel}
    //       disabled={panelCount <= 0}
    //     >
    //       <Minus size={16} />
    //     </button>
    //   </div>

    //   <div className="space-y-1">
    //     <StatItem
    //       icon={Sun}
    //       label="Solar Panels"
    //       value={results.panels}
    //       unit="units"
    //     />
    //     <StatItem
    //       icon={Battery}
    //       label="Total Power"
    //       value={results.totalPower}
    //       unit="kW"
    //     />
    //     <StatItem
    //       icon={Zap}
    //       label="Electricity Generated per Day"
    //       value={results.electricityPerDay}
    //       unit="kWh"
    //     />
    //     <StatItem
    //       icon={Calendar}
    //       label="Electricity Generated per Month"
    //       value={results.electricityPerMonth}
    //       unit="kWh"
    //     />
    //     <StatItem
    //       icon={IndianRupee}
    //       label="Daily Savings"
    //       value={formatRupees(results.dailySavings)}
    //       unit="/day"
    //     />
    //     <StatItem
    //       icon={IndianRupee}
    //       label="Yearly Savings"
    //       value={formatRupees(results.yearlySavings)}
    //       unit="/year"
    //     />
    //     <StatItem
    //       icon={Home}
    //       label="Area Covered"
    //       value={results.areaCovered}
    //       unit="m²"
    //     />
    //     <StatItem
    //       icon={Thermometer}
    //       label="CO₂ Reduced per Day"
    //       value={results.co2Reduced}
    //       unit="kg"
    //     />
    //   </div>

    //   <div className="mt-3 p-2 bg-slate-600 rounded-lg text-xs">
    //     <h3 className="font-bold mb-1">Assumptions:</h3>
    //     <ol className="list-decimal list-inside space-y-1">
    //       <li>
    //         The panel wattage is set to <strong>540W</strong>.
    //       </li>
    //       <li>
    //         We assume <strong>₹8/kWh</strong> and{" "}
    //         <strong>5 hours</strong> of average peak sunlight per day.
    //       </li>
    //     </ol>
    //   </div>
    // </div>

    <div className="p-3  mx-auto rounded-xl  text-black  overflow-y-auto mb-[-2rem]">
      <div
        className="mb-3 relative mx-auto w-[100%] md:w-[90%] overflow-hidden border border-gray-200 shadow-lg rounded-lg"
        style={{ height: "300px" }}
      >
        {/* Image Section with Overlay */}
        <div className="relative h-full">
          <img
            src="/images/solar.jpg"
            alt="House with solar panels"
            className="absolute inset-0 w-full h-full object-cover rounded-lg "
          />
        </div>

        {/* Solar Panel Icons */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 200"
          style={{ position: "absolute", top: 63, right: 37 }}
        >
          {[...Array(panelCount)].map((_, index) => (
            <SolarPanelIcon
              key={index}
              x={100 + (index % 20) * 12}
              y={40 + Math.floor(index / 20) * 8}
              transform={`rotate(-15, ${100 + (index % 20) * 12}, ${
                40 + Math.floor(index / 20) * 8
              })`}
            />
          ))}
        </svg>
      </div>

      <div className="flex justify-between items-center mb-4 bg-white p-3 rounded-lg shadow-sm w-[90%] mx-auto border border-gray-200 transition-shadow ">
        <button
          className="bg-green-500 text-white rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:bg-green-600 transition-transform transform hover:scale-[1.02] disabled:bg-gray-300"
          onClick={handleAddPanel}
          disabled={panelCount >= MAX_PANELS}
        >
          <Plus size={18} />
        </button>

        <div className="text-lg font-semibold flex items-center space-x-2">
          <Sun className="text-yellow-400" size={22} />
          <span className="text-gray-800">{panelCount} Panels</span>
        </div>

        <button
          className="bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:bg-red-600 transition-transform transform hover:scale-[1.02] disabled:bg-gray-300"
          onClick={handleRemovePanel}
          disabled={panelCount <= 0}
        >
          <Minus size={18} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-[3rem]">
        {[
          {
            label: "Solar Panels",
            icon: Sun,
            value: results.panels,
            unit: "units",
          },
          {
            label: "Total Power",
            icon: Battery,
            value: results.totalPower,
            unit: "kW",
          },
          {
            label: "Electricity Generated per Day",
            icon: Zap,
            value: results.electricityPerDay,
            unit: "kWh",
          },
          {
            label: "Electricity Generated per Month",
            icon: Calendar,
            value: results.electricityPerMonth,
            unit: "kWh",
          },
          {
            label: "Daily Savings",
            icon: IndianRupee,
            value: formatRupees(results.dailySavings),
            unit: "/day",
          },
          {
            label: "Yearly Savings",
            icon: IndianRupee,
            value: formatRupees(results.yearlySavings),
            unit: "/year",
          },
          {
            label: "Area Covered",
            icon: Home,
            value: results.areaCovered,
            unit: "m²",
          },
          {
            label: "CO₂ Reduced per Day",
            icon: Thermometer,
            value: results.co2Reduced,
            unit: "kg",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative bg-[#f7f7f7] p-2 pb-5 pt-12 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-between min-h-[110px]"
          >
            {/* Icon in the top-left corner */}
            <div className="absolute top-[-10px] left-4 bg-gradient-to-br from-orange-400 to-orange-500 p-2 rounded-md z-10">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <div className="absolute top-2 right-3 text-[15.5px] font-semibold text-gray-800">
              {item.value} {item.unit}
            </div>
            {/* Content */}
            <div className="flex flex-col justify-center items-center text-center flex-grow  ">
              <h3 className="text-[16px] text-gray-600 mt-1 min-h-[60px] ">
                {item.label}
              </h3>
              {/* <p className="font-semibold text-md">
                {item.value} {item.unit}
              </p> */}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-3 bg-orange-50 rounded-lg border border-orange-200 shadow-sm">
        <h3 className="text-md font-bold mb-2 text-orange-600">Assumptions:</h3>
        <ol className="list-decimal list-inside space-y-1 text-gray-700 text-md">
          <li>
            The panel wattage is set to{" "}
            <strong className="text-orange-500">540W</strong>.
          </li>
          <li>
            We assume <strong className="text-orange-500">₹8/kWh</strong> and{" "}
            <strong className="text-orange-500">5 hours</strong> of average peak
            sunlight per day.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CompleteSolarCalculator;









