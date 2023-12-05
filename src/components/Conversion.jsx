/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import Dropdown from './Dropdown' // Importing the Dropdown component we created earlier

// Placeholder function to calculate values - the actual implementation will need real data
const calculateValue = (quantity, bondPrice, currencyRate) => {
  // This function would calculate the value based on bond price and currency rate
  return quantity * bondPrice * currencyRate;
}

const Conversion = ({ bonds, currencies }) => {
  // States to store selected bond, currency, and input values
  const [selectedBond, setSelectedBond] = useState(bonds[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [quantity, setQuantity] = useState('');
  const [value, setValue] = useState('');

  // Handlers for input changes
  const handleQuantityChange = (e) => {
    const qty = e.target.value;
    setQuantity(qty);
    // Perform calculation to update value based on quantity and selected bond and currency
    const calculatedValue = calculateValue(qty, selectedBond.price, selectedCurrency.rate);
    console.log(`Selected Bond: ${selectedBond.name}, Price: ${selectedBond.price}`);
    console.log(`Selected Currency: ${selectedCurrency.name}, Rate: ${selectedCurrency.rate}`);
    console.log(`Quantity: ${qty}, Calculated Value: ${calculatedValue}`);
    setValue(calculatedValue);
  }

  const handleValueChange = (e) => {
    const val = e.target.value;
    setValue(val);
    // Perform calculation to update quantity based on value and selected bond and currency
    const calculatedQuantity = val / (selectedBond.price * selectedCurrency.rate);
    console.log(`Selected Bond: ${selectedBond.name}, Price: ${selectedBond.price}`);
    console.log(`Selected Currency: ${selectedCurrency.name}, Rate: ${selectedCurrency.rate}`);
    console.log(`Value: ${val}, Calculated Quantity: ${calculatedQuantity}`);
    setQuantity(calculatedQuantity);
  }

  return (
    <div className="p-4 bg-purple-700 rounded-lg shadow-lg text-white">
      <div className="flex flex-col mb-4">
        <Dropdown
          label="Select Bond"
          items={bonds.map(bond => ({ name: bond.name, icon: bond.icon }))}
          onSelect={(item) => setSelectedBond(bonds.find(bond => bond.name === item.name))}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={handleQuantityChange}
          className="mt-2 p-2 rounded bg-purple-500 text-white placeholder-purple-300"
        />
      </div>
      <div className="flex flex-col">
        <Dropdown
          label="Select Currency"
          items={currencies.map(currency => ({ name: currency.name, icon: currency.icon }))}
          onSelect={(item) => setSelectedCurrency(currencies.find(currency => currency.name === item.name))}
        />
        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={handleValueChange}
          className="mt-2 p-2 rounded bg-purple-500 text-white placeholder-purple-300"
        />
      </div>
    </div>
  );
}

export default Conversion;

// Example usage:
/*
<Conversion
  bonds={[
    { name: 'LFT', price: 1000, icon: '/path/to/lft/icon.svg' },
    { name: 'LTN', price: 900, icon: '/path/to/ltn/icon.svg' },
    // ... other bonds
  ]}
  currencies={[
    { name: 'BRL', rate: 5.2, icon: '/path/to/brl/icon.svg' },
    { name: 'USD', rate: 1, icon: '/path/to/usd/icon.svg' },
    // ... other currencies
  ]}
/>
*/
