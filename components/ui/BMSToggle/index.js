import React, { useState } from 'react';
import styles from './styles.module.css';

const BMSToggle = ({ onToggle, initialValue = 'ENERGY STORAGE' }) => {
  const [activeTab, setActiveTab] = useState(initialValue);

  // Update local state when initialValue changes
  React.useEffect(() => {
    setActiveTab(initialValue);
  }, [initialValue]);

  const handleToggle = (value) => {
    setActiveTab(value);
    onToggle(value);
  };

  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleWrapper}>
        {/* Active underline (centered under text) */}
        <div
          className={styles.activeBorder}
          style={{ 
            left: activeTab === 'ENERGY STORAGE' ? '-10%' : '50%', 
            width: '60%' 
          }}
        />

        {/* Toggle buttons (text only, no icons) */}
        <div
          onClick={() => handleToggle('ENERGY STORAGE')}
          className={`${styles.toggleButton} ${
            activeTab === 'ENERGY STORAGE' ? styles.active : styles.inactive
          }`}
        >
          Energy Storage 
        </div>

        <div
          onClick={() => handleToggle('ELECTRIC VEHICLES')}
          className={`${styles.toggleButton} ${
            activeTab === 'ELECTRIC VEHICLES' ? styles.active : styles.inactive
          }`}
        >
          Electric Vehicles
        </div>
      </div>
    </div>
  );
};

export default BMSToggle;
