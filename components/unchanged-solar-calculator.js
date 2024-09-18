// import React, { useState, useEffect } from 'react';
// import { Plus, Minus, Sun, Zap, Home, Thermometer, Battery, IndianRupee, Calendar } from 'lucide-react';

// const SolarPanelIcon = ({ x, y }) => (
//   <svg x={x} y={y} width="12" height="8" viewBox="0 0 12 8">
//     <rect width="12" height="8" fill="#4a90e2" stroke="#2980b9" strokeWidth="0.5" />
//     <line x1="4" y1="0" x2="4" y2="8" stroke="#2980b9" strokeWidth="0.25" />
//     <line x1="8" y1="0" x2="8" y2="8" stroke="#2980b9" strokeWidth="0.25" />
//     <line x1="0" y1="4" x2="12" y2="4" stroke="#2980b9" strokeWidth="0.25" />
//   </svg>
// );

// const StatItem = ({ icon: Icon, label, value, unit }) => (
//   <div className="flex items-center justify-between border-b border-gray-700 py-2">
//     <div className="flex items-center">
//       <Icon size={18} className="mr-2 text-yellow-500" />
//       <span className="text-sm">{label}</span>
//     </div>
//     <span className="font-semibold">
//       {['Daily Savings', 'Yearly Savings'].includes(label) ? value : value} 
//       <span className="text-xs text-gray-400"> {unit}</span>
//     </span>
//   </div>
// );

// const CompleteSolarCalculator = () => {
//   const [panelCount, setPanelCount] = useState(0);
//   const [results, setResults] = useState({
//     panels: 0,
//     totalPower: 0,
//     electricityPerDay: 0,
//     electricityPerMonth: 0,
//     dailySavings: 0,
//     areaCovered: 0,
//     co2Reduced: 0,
//     yearlySavings: 0,
//   });

//   const PANEL_WATTAGE = 540; // Watts
//   const ENERGY_RATE = 8; // ₹/kWh
//   const AVERAGE_SUN_HOURS = 5; // hours per day
//   const MAX_PANELS = 40;

//   useEffect(() => {
//     const totalPower = panelCount * PANEL_WATTAGE / 1000; // kW
//     const electricityPerDay = totalPower * AVERAGE_SUN_HOURS; // kWh/day
//     const electricityPerMonth = electricityPerDay * 30; // kWh/month
//     const dailySavings = electricityPerDay * ENERGY_RATE; // ₹/day
//     const areaCovered = panelCount * 2.5; // m² (assuming 2.5m² per 540W panel)
//     const co2Reduced = electricityPerDay * 0.82; // kg/day (assuming 0.82 kg CO2 per kWh for India)
//     const yearlySavings = dailySavings * 365; // ₹/year

//     setResults({
//       panels: panelCount,
//       totalPower: Math.round(totalPower),
//       electricityPerDay: Math.round(electricityPerDay),
//       electricityPerMonth: Math.round(electricityPerMonth),
//       dailySavings: Math.round(dailySavings),
//       areaCovered: Math.round(areaCovered),
//       co2Reduced: Math.round(co2Reduced),
//       yearlySavings: Math.round(yearlySavings),
//     });
//   }, [panelCount]);

//   const handleAddPanel = () => {
//     if (panelCount < MAX_PANELS) setPanelCount(prevCount => prevCount + 1);
//   };

//   const handleRemovePanel = () => {
//     if (panelCount > 0) setPanelCount(prevCount => prevCount - 1);
//   };

//   const formatRupees = (value) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       maximumFractionDigits: 0,
//     }).format(value);
//   };

//   return (
//     <div className="p-4 max-w-md md:max-w-[350px]  mx-auto bg-gray-800 rounded-xl shadow-lg text-white">
//       <h2 className="text-xl font-bold mb-4 text-center">
//         Indian Solar Calculator
//       </h2>

//       <div
//         className="mb-4 rounded relative"
//         style={{ height: "200px", overflow: "hidden" }}
//       >
//         <img
//           src="/images/solar.jpg"
//           alt="House with solar panels"
//           className="absolute inset-0 w-full h-full object-cover scale-[1.25]"
//         />
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 400 200"
//           style={{ position: "absolute", top: 32, right: 35 }}
//         >
//           {[...Array(panelCount)].map((_, index) => (
//             <SolarPanelIcon
//               key={index}
//               x={100 + (index % 20) * 14} // 20 panels per row
//               y={40 + Math.floor(index / 20) * 10} // Move to the next row after 20 panels
//             />
//           ))}
//         </svg>
//       </div>

//       <div className="flex justify-between items-center mb-4 bg-gray-700 p-2 rounded">
//         <button
//           className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
//           onClick={handleAddPanel}
//           disabled={panelCount >= MAX_PANELS}
//         >
//           <Plus size={20} />
//         </button>
//         <div className="text-xl font-bold flex items-center">
//           <Sun className="text-yellow-400 mr-2" size={24} />
//           {panelCount} Panels
//         </div>
//         <button
//           className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
//           onClick={handleRemovePanel}
//           disabled={panelCount <= 0}
//         >
//           <Minus size={20} />
//         </button>
//       </div>

//       <div className="space-y-1">
//         <StatItem
//           icon={Sun}
//           label="Solar Panels"
//           value={results.panels}
//           unit="units"
//         />
//         <StatItem
//           icon={Battery}
//           label="Total Power"
//           value={results.totalPower}
//           unit="kW"
//         />
//         <StatItem
//           icon={Zap}
//           label="Electricity Generated per Day"
//           value={results.electricityPerDay}
//           unit="kWh"
//         />
//         <StatItem
//           icon={Calendar}
//           label="Electricity Generated per Month"
//           value={results.electricityPerMonth}
//           unit="kWh"
//         />
//         <StatItem
//           icon={IndianRupee}
//           label="Daily Savings"
//           value={formatRupees(results.dailySavings)}
//           unit="/day"
//         />
//         <StatItem
//           icon={IndianRupee}
//           label="Yearly Savings"
//           value={formatRupees(results.yearlySavings)}
//           unit="/year"
//         />
//         <StatItem
//           icon={Home}
//           label="Area Covered"
//           value={results.areaCovered}
//           unit="m²"
//         />
//         <StatItem
//           icon={Thermometer}
//           label="CO₂ Reduced per Day"
//           value={results.co2Reduced}
//           unit="kg"
//         />
//       </div>

//       <div className="mt-4 p-3 bg-blue-900 rounded-lg text-sm">
//         <h3 className="font-bold mb-2">Assumptions:</h3>
//         <ol className="list-decimal list-inside space-y-1">
//           <li>
//             The panel wattage is set to <strong>540W</strong>, representing a
//             typical high-efficiency solar panel available in the market.
//           </li>
//           <li>
//             We assume <strong>₹8/kWh</strong> as the energy rate and{" "}
//             <strong>5 hours</strong> of average peak sunlight per day for solar
//             generation estimates.
//           </li>
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default CompleteSolarCalculator;





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
    <div className="p-3 max-w-md md:max-w-[350px] mx-auto bg-gray-800 rounded-xl shadow-lg text-white max-h-[650px] overflow-y-auto">
      <h2 className="text-lg font-bold mb-2 text-center">
        Indian Solar Calculator
      </h2>

      <div
        className="mb-3 rounded relative"
        style={{ height: "150px", overflow: "hidden" }}
      >
        <img
          src="/images/solar.jpg"
          alt="House with solar panels"
          className="absolute inset-0 w-full h-full object-cover scale-[1.3]"
        />
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 200"
          style={{ position: "absolute", top: 30, right: 25 }}
        >
          {[...Array(panelCount)].map((_, index) => (
            <SolarPanelIcon
              key={index}
              x={100 + (index % 20) * 12} // 20 panels per row
              y={40 + Math.floor(index / 20) * 8} // Move to the next row after 20 panels
            />
          ))}
        </svg>
      </div>

      <div className="flex justify-between items-center mb-3 bg-gray-700 p-1 rounded">
        <button
          className="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
          onClick={handleAddPanel}
          disabled={panelCount >= MAX_PANELS}
        >
          <Plus size={16} />
        </button>
        <div className="text-lg font-bold flex items-center">
          <Sun className="text-yellow-400 mr-1" size={20} />
          {panelCount} Panels
        </div>
        <button
          className="bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
          onClick={handleRemovePanel}
          disabled={panelCount <= 0}
        >
          <Minus size={16} />
        </button>
      </div>

      <div className="space-y-1">
        <StatItem
          icon={Sun}
          label="Solar Panels"
          value={results.panels}
          unit="units"
        />
        <StatItem
          icon={Battery}
          label="Total Power"
          value={results.totalPower}
          unit="kW"
        />
        <StatItem
          icon={Zap}
          label="Electricity Generated per Day"
          value={results.electricityPerDay}
          unit="kWh"
        />
        <StatItem
          icon={Calendar}
          label="Electricity Generated per Month"
          value={results.electricityPerMonth}
          unit="kWh"
        />
        <StatItem
          icon={IndianRupee}
          label="Daily Savings"
          value={formatRupees(results.dailySavings)}
          unit="/day"
        />
        <StatItem
          icon={IndianRupee}
          label="Yearly Savings"
          value={formatRupees(results.yearlySavings)}
          unit="/year"
        />
        <StatItem
          icon={Home}
          label="Area Covered"
          value={results.areaCovered}
          unit="m²"
        />
        <StatItem
          icon={Thermometer}
          label="CO₂ Reduced per Day"
          value={results.co2Reduced}
          unit="kg"
        />
      </div>

      <div className="mt-3 p-2 bg-slate-600 rounded-lg text-xs">
        <h3 className="font-bold mb-1">Assumptions:</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            The panel wattage is set to <strong>540W</strong>.
          </li>
          <li>
            We assume <strong>₹8/kWh</strong> and{" "}
            <strong>5 hours</strong> of average peak sunlight per day.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CompleteSolarCalculator;









// import React, { useState, useEffect } from 'react';
// import { Plus, Minus, Sun, Zap, Home, Thermometer, Battery, IndianRupee, Calendar } from 'lucide-react';

// const SolarPanelIcon = ({ x, y }) => (
//   <svg x={x} y={y} width="12" height="8" viewBox="0 0 12 8">
//     <rect width="12" height="8" fill="#aeccbd" stroke="#8ca89e" strokeWidth="0.5" />
//     <line x1="4" y1="0" x2="4" y2="8" stroke="#8ca89e" strokeWidth="0.25" />
//     <line x1="8" y1="0" x2="8" y2="8" stroke="#8ca89e" strokeWidth="0.25" />
//     <line x1="0" y1="4" x2="12" y2="4" stroke="#8ca89e" strokeWidth="0.25" />
//   </svg>
// );

// const StatItem = ({ icon: Icon, label, value, unit }) => (
//   <div className="flex items-center justify-between border-b border-gray-500 py-2">
//     <div className="flex items-center">
//       <Icon size={18} className="mr-2 text-green-600" />
//       <span className="text-sm">{label}</span>
//     </div>
//     <span className="font-semibold">
//       {['Daily Savings', 'Yearly Savings'].includes(label) ? value : value} 
//       <span className="text-xs text-gray-400"> {unit}</span>
//     </span>
//   </div>
// );

// const CompleteSolarCalculator = () => {
//   const [panelCount, setPanelCount] = useState(0);
//   const [results, setResults] = useState({
//     panels: 0,
//     totalPower: 0,
//     electricityPerDay: 0,
//     electricityPerMonth: 0,
//     dailySavings: 0,
//     areaCovered: 0,
//     co2Reduced: 0,
//     yearlySavings: 0,
//   });

//   const PANEL_WATTAGE = 540; // Watts
//   const ENERGY_RATE = 8; // ₹/kWh
//   const AVERAGE_SUN_HOURS = 5; // hours per day
//   const MAX_PANELS = 40;

//   useEffect(() => {
//     const totalPower = panelCount * PANEL_WATTAGE / 1000; // kW
//     const electricityPerDay = totalPower * AVERAGE_SUN_HOURS; // kWh/day
//     const electricityPerMonth = electricityPerDay * 30; // kWh/month
//     const dailySavings = electricityPerDay * ENERGY_RATE; // ₹/day
//     const areaCovered = panelCount * 2.5; // m² (assuming 2.5m² per 540W panel)
//     const co2Reduced = electricityPerDay * 0.82; // kg/day (assuming 0.82 kg CO2 per kWh for India)
//     const yearlySavings = dailySavings * 365; // ₹/year

//     setResults({
//       panels: panelCount,
//       totalPower: Math.round(totalPower),
//       electricityPerDay: Math.round(electricityPerDay),
//       electricityPerMonth: Math.round(electricityPerMonth),
//       dailySavings: Math.round(dailySavings),
//       areaCovered: Math.round(areaCovered),
//       co2Reduced: Math.round(co2Reduced),
//       yearlySavings: Math.round(yearlySavings),
//     });
//   }, [panelCount]);

//   const handleAddPanel = () => {
//     if (panelCount < MAX_PANELS) setPanelCount(prevCount => prevCount + 1);
//   };

//   const handleRemovePanel = () => {
//     if (panelCount > 0) setPanelCount(prevCount => prevCount - 1);
//   };

//   const formatRupees = (value) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       maximumFractionDigits: 0,
//     }).format(value);
//   };

//   return (
//     <div className="p-4 max-w-md md:max-w-[350px] mx-auto bg-[#aeccbd] rounded-xl shadow-lg text-gray-800">
//       <h2 className="text-xl font-bold mb-4 text-center">
//         Indian Solar Calculator
//       </h2>

//       <div
//         className="mb-4 rounded relative"
//         style={{ height: "200px", overflow: "hidden" }}
//       >
//         <img
//           src="/images/solar.jpg"
//           alt="House with solar panels"
//           className="absolute inset-0 w-full h-full object-cover scale-[1.25]"
//         />
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 400 200"
//           style={{ position: "absolute", top: 32, right: 35 }}
//         >
//           {[...Array(panelCount)].map((_, index) => (
//             <SolarPanelIcon
//               key={index}
//               x={100 + (index % 20) * 14} // 20 panels per row
//               y={40 + Math.floor(index / 20) * 10} // Move to the next row after 20 panels
//             />
//           ))}
//         </svg>
//       </div>

//       <div className="flex justify-between items-center mb-4 bg-gray-600 p-2 rounded">
//         <button
//           className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
//           onClick={handleAddPanel}
//           disabled={panelCount >= MAX_PANELS}
//         >
//           <Plus size={20} />
//         </button>
//         <div className="text-xl font-bold flex items-center">
//           <Sun className="text-yellow-400 mr-2" size={24} />
//           {panelCount} Panels
//         </div>
//         <button
//           className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
//           onClick={handleRemovePanel}
//           disabled={panelCount <= 0}
//         >
//           <Minus size={20} />
//         </button>
//       </div>

//       <div className="space-y-1">
//         <StatItem
//           icon={Sun}
//           label="Solar Panels"
//           value={results.panels}
//           unit="units"
//         />
//         <StatItem
//           icon={Battery}
//           label="Total Power"
//           value={results.totalPower}
//           unit="kW"
//         />
//         <StatItem
//           icon={Zap}
//           label="Electricity Generated per Day"
//           value={results.electricityPerDay}
//           unit="kWh"
//         />
//         <StatItem
//           icon={Calendar}
//           label="Electricity Generated per Month"
//           value={results.electricityPerMonth}
//           unit="kWh"
//         />
//         <StatItem
//           icon={IndianRupee}
//           label="Daily Savings"
//           value={formatRupees(results.dailySavings)}
//           unit="/day"
//         />
//         <StatItem
//           icon={IndianRupee}
//           label="Yearly Savings"
//           value={formatRupees(results.yearlySavings)}
//           unit="/year"
//         />
//         <StatItem
//           icon={Home}
//           label="Area Covered"
//           value={results.areaCovered}
//           unit="m²"
//         />
//         <StatItem
//           icon={Thermometer}
//           label="CO₂ Reduced per Day"
//           value={results.co2Reduced}
//           unit="kg"
//         />
//       </div>

//       <div className="mt-4 p-3 bg-green-700 rounded-lg text-sm text-white">
//         <h3 className="font-bold mb-2">Assumptions:</h3>
//         <ol className="list-decimal list-inside space-y-1">
//           <li>
//             The panel wattage is set to <strong>540W</strong>.
//           </li>
//           <li>
//             We assume <strong>₹8/kWh</strong> as the energy rate and{" "}
//             <strong>5 hours</strong> of average peak sunlight per day for solar
//             generation estimates.
//           </li>
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default CompleteSolarCalculator;

