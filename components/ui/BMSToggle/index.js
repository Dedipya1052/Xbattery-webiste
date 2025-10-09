import React, { useState } from 'react';
import styles from './styles.module.css';
import { FaCar } from 'react-icons/fa';
import Image from 'next/image';

const BMSToggle = ({ onToggle, initialValue = 'ENERGY STORAGE' }) => {
  const [activeTab, setActiveTab] = useState(initialValue);

  const handleToggle = (value) => {
    setActiveTab(value);
    onToggle(value);
  };

  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleWrapper} data-active={activeTab}>
        <button
          className={`${styles.toggleButton} ${activeTab === 'ENERGY STORAGE' ? styles.active : styles.inactive}`}
          onClick={() => handleToggle('ENERGY STORAGE')}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            ENERGY STORAGE
            {activeTab === 'ENERGY STORAGE' ? (
              // Active has black text → use black icon (32px)
              <Image src="/images/icons/Screenshot 2025-10-08 153628-Photoroom.png" alt="Energy icon dark" width={30} height={30} />
            ) : (
              // Inactive has white text → use white icon (36px)
              <Image src="/images/icons/download (29)-Photoroom.png" alt="Energy icon light" width={42} height={42} />
            )}
          </span>
        </button>
        <button
          className={`${styles.toggleButton} ${activeTab === 'ELECTRIC VEHICLES' ? styles.active : styles.inactive}`}
          onClick={() => handleToggle('ELECTRIC VEHICLES')}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            ELECTRIC VEHICLES
            <FaCar className={styles.carIcon} data-active={activeTab === 'ELECTRIC VEHICLES' ? '1' : '0'} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BMSToggle;
