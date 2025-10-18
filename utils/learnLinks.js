// Centralized Learn links configuration
// Update links here and they will reflect across Learn pages and the footer.

export const energyStorage = [
  { name: "Battery Energy Storage System", link: "/learn/battery-energy-storage-systems" },
  { name: "Emerging LDES Technologies", link: "/learn/emerging-ldes-technologies" },
  { name: "Understanding BMS in ESS", link: "/learn/understanding-the-brain-of-an-energy-storage-systems-the-bms" },
  { name: "Economics of Energy Storage", link: "/learn/understanding-the-economics-of-energy-storage-for-homes-and-businesses" },
  
];

export const renewableEnergy = [
  { name: "Solar Energy", link: "/learn/solar-energy" },
  { name: "Wind Energy", link: "/learn/wind-energy" },
  { name: "Geothermal Energy", link: "/learn/geothermal-energy" },
  { name: "Environmental Impact", link: "/learn/environmental-impact-of-renewable-energy-projects" },
];

export const electricVehicles = [
  { name: "EV vs ICE Costs", link: "/learn/ev-vs-ice-costs" },
  { name: "EV Charging", link: "/learn/ev-charging" },
  { name: "Indian EV Market", link: "/learn/indian-ev-market" },
  { name: "EVs and the Environment", link: "/learn/understanding-the-impact-of-electric-vehicles-on-the-environment" },
  { name: "Hydrogen vs Electric Cars", link: "/learn/hydrogen-vs-electric-cars" },
];

export const electricity = [
  { name: "India’s Electricity Sector", link: "/learn/indias-electricity-sector" },
  { name: "Power Purchase Agreement", link: "/learn/power-purchase-agreement" },
  { name: "Indian Electricity Terminologies", link: "/learn/understanding-the-terminologies-in-the-indian-electricity-sector" },
  { name: "Why Our Power Goes Out", link: "/learn/why-our-power-goes-out" },
];

export const grid = [
  { name: "Renewable Integration", link: "/learn/renewable-integration" },
  { name: "Smart Grid", link: "/learn/smart-grid" },
  { name: "Understanding Smart Meters", link: "/learn/understanding-smart-meters" },
  { name: "On-Grid vs Off-Grid", link: "/learn/understanding-the-differences-between-on-grid-and-off-grid-systems" },
];

export const batteries = [
  { name: "Understanding Lithium", link: "/learn/understanding-lithium" },
  { name: "Emerging Battery Technologies", link: "/learn/emerging-battery-technologies" },
  { name: "Understanding LFP Batteries", link: "/learn/understanding-lfp-batteries" },
  { name: "Future of Lithium UPS", link: "/learn/how-lithium-ups-challenges-traditional-ups-as-power-backup-of-the-future" },
  { name: "DIY Lithium Batteries", link: "/learn/diy-lithium-batteries" },

];

// Battery Management System (BMS) - custom items
export const bms = [
  {
    name: "Best BMS for Li-Ion Batteries",
    link: "/learn/best-battery-management-system-for-lithium-ion-batteries",
  },
  {
    name: "BMS Architecture Guide",
    link: "/learn/the-complete-guide-to-bms-architecture",

  },
  {
    name: "Active vs Passive Cell Balancing",
    link: "/learn/active-vs-passive-cell-balancing",
  },
  {
    name: "SOC vs SOH",
    link: "/learn/soc-vs-soh",
  },
  
  
];

// Energy Policy & Regulations - custom items
export const policies = [
  {
    name: "BIS Battery Standards",
    link: "/learn/navigating-bis-standards-for-battery-systems",
  },
  
  {
    name: "Grid Storage Requirements",
    link: "/learn/grid-code-requirements-for-energy-storage",
  },
  {
    name: "EV Policies in India",
    link: "/learn/state-wise-ev-policies-in-india",

  },
  {
    name: "PLI Scheme for Batteries",
    link: "/learn/indias-pli-scheme-for-batteries",

  },
];

// Technology Integration - custom items
export const technology = [
  {
    name: "Battery Life Prediction Using AI",
    link: "/learn/how-ai-is-revolutionizing-battery-life-prediction",
  },
  
  {
    name: "Digital Twins for BMS",
    link: "/learn/digital-twins-for-battery-management",
  },
  
  {
    name: "Smart Battery Systems",
    link: "/learn/iot-enabled-battery-monitoring",


  },
  {
    name: "Cybersecurity in Batteries",
    link: "/learn/cybersecurity-threats-in-smart-battery-systems",

  },
];




// Section headers with category landing links, followed by items
export const allLearnLinks = [
  { name: "Energy storage", link: "/learn/energy-storage" },
  ...energyStorage,
  { name: "Renewable energy", link: "/learn/renewable-energy" },
  ...renewableEnergy,
  { name: "Electricity", link: "/learn/electricity" },
  ...electricity,
  { name: "Electric Vehicles", link: "/learn/electric-vehicles" },
  ...electricVehicles,
  { name: "Batteries", link: "/learn/batteries" },
  ...batteries,
  { name: "Grid", link: "/learn/grid" },
  ...grid,
  
];

// Grouped export for UI sections to map over
export const learnGroups = {
  energyStorage,
  renewableEnergy,
  electricity,
  electricVehicles,
  batteries,
  grid,
  bms,
  policies,
  technology,
};


