import { useState, useEffect } from 'react';
import { Tv, Laptop, Smartphone, Fan, Lightbulb, Refrigerator, WashingMachine, Wind, Waves, Microwave } from 'lucide-react';
import { IoArrowBack } from 'react-icons/io5';
import styles from './styles.module.css';
import { useRouter } from 'next/router';

const ELECTRICITY_RATE = 5.5;

const CardContent = ({ children, className }) => (
  <div className={`text-gray-800 ${className}`}>
    {children}
  </div>
);

const initialApplianceTypes = [
  { id: 'fan', name: 'Fan', icon: Fan, power: 60 },
  { id: 'light', name: 'Light', icon: Lightbulb, power: 30 },
  { id: 'tv', name: 'TV', icon: Tv, power: 100 },
  { id: 'fridge', name: 'Fridge', icon: Refrigerator, power: 150 },
  { id: 'ac', name: 'AC', icon: Wind, power: 1500 },
  { id: 'washing-machine', name: 'Washing Machine', icon: WashingMachine, power: 500 },
  { id: 'laptop', name: 'Laptop', icon: Laptop, power: 50 },
  { id: 'smartphone', name: 'Smartphone', icon: Smartphone, power: 5 },
  { id: 'water-heater', name: 'Water Heater', icon: Waves, power: 1500 },
  { id: 'microwave', name: 'Microwave', icon: Microwave, power: 800 },
];

const ApplianceIcon = ({ appliance, onAdd, onRemove, onPowerChange, count }) => {
    const Icon = appliance.icon;
    const [power, setPower] = useState(appliance.power);
  
    const handlePowerChange = (e) => {
      const newPower = parseInt(e.target.value);
      if (!isNaN(newPower) && newPower > 0) {
        setPower(newPower);
        onPowerChange(appliance.id, newPower);
      }
    };
  
    return (
      <div className="flex flex-col items-center p-5 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
        <Icon size={36} className="text-green-600 mb-3" />
  
        {/* Appliance name, ensuring it stays in a single line */}
        <span className="text-xs text-center text-gray-600 font-medium whitespace-nowrap overflow-hidden max-w-full">
          {appliance.name}
        </span>
  
        {/* Input field for power with proper spacing */}
        <div className="flex items-center mt-5 mb-[-0.5rem]">
          <input
            type="number"
            value={power}
            onChange={handlePowerChange}
            className="text-sm text-center text-gray-800 bg-gray-100 w-14 p-1 rounded-lg shadow-sm border border-gray-300"
          />
          <span className="ml-2 text-sm text-gray-500">W</span>
        </div>
  
        {/* Button controls for adding/removing appliances */}
        <div className="mt-4 flex items-center space-x-4">
          <button
            onClick={() => onRemove(appliance.id)}
            className="text-red-500 p-2 rounded-full hover:bg-red-100 transition-colors"
          >
            -
          </button>
          <span className="text-lg text-gray-800 font-semibold">{count}</span>
          <button
            onClick={() => onAdd(appliance.id)}
            className="text-green-500 p-2 rounded-full hover:bg-green-100 transition-colors"
          >
            +
          </button>
        </div>
      </div>
    );
  };
  
  
  
  

const HomeEnergyCalculator = () => {
  const [applianceTypes, setApplianceTypes] = useState(initialApplianceTypes);
  const [appliances, setAppliances] = useState({});
  const [consumption, setConsumption] = useState(0);
  const [cost, setCost] = useState(0);
  const router = useRouter();

  const addAppliance = (id) => {
    setAppliances((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeAppliance = (id) => {
    setAppliances((prev) => {
      const newAppliances = { ...prev };
      if (newAppliances[id] > 0) {
        newAppliances[id]--;
      }
      if (newAppliances[id] === 0) {
        delete newAppliances[id];
      }
      return newAppliances;
    });
  };

  const handlePowerChange = (id, newPower) => {
    setApplianceTypes((prev) =>
      prev.map((appliance) =>
        appliance.id === id ? { ...appliance, power: newPower } : appliance
      )
    );
  };

  useEffect(() => {
    let totalConsumption = 0;
    Object.entries(appliances).forEach(([id, count]) => {
      const appliance = applianceTypes.find((a) => a.id === id);
      if (appliance) {
        totalConsumption += (appliance.power * 8 * 30 * count) / 1000; // Assuming 8 hours of use per day
      }
    });
    setConsumption(totalConsumption);
    setCost(totalConsumption * ELECTRICITY_RATE);
  }, [appliances, applianceTypes]);

  return (
    <div className={styles.head1}>
      <div className={styles.container}>
        <div>
          {/* <div
            className={styles.affBackButton}
            onClick={() => router.push('/learn')}
          >
            <IoArrowBack /> <p>Back</p>
          </div> */}
          <h2 className={styles.title}>Home Energy Consumption Calculator</h2>
          <div className="text-lg text-center mt-[2rem] mb-[2rem]">
          The Home Energy Calculator helps estimate your monthly energy consumption in kilowatt-hours (kWh). By entering the wattage, hours of use per day, and number of days, you can easily calculate your electricity usage and better understand your energy needs.
          </div>
          <CardContent className="space-y-6 mt-[3rem]">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Select Your Appliances:
              </h3>
              <div className="grid grid-cols-5 gap-6">
                {applianceTypes.map((appliance) => (
                  <ApplianceIcon
                    key={appliance.id}
                    appliance={appliance}
                    onAdd={addAppliance}
                    onRemove={removeAppliance}
                    onPowerChange={handlePowerChange}
                    count={appliances[appliance.id] || 0}
                  />
                ))}
              </div>
            </div>

            <div className="text-center bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="font-semibold text-xl text-gray-800">
                Monthly Consumption: {consumption.toFixed(2)} kWh
              </p>
              <p className="font-semibold text-xl text-gray-800 mt-2">
                Estimated Cost: ₹ {cost.toFixed(2)}
              </p>
            </div>

            <p className="text-sm text-gray-500 text-center">
              Note: You can edit the wattage of each appliance to match your
              specific devices.
            </p>
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default HomeEnergyCalculator;
