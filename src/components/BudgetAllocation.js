import React, { useState } from 'react';
import './BudgetAllocation.css'; // Import your CSS file

const currencies = [
  { value: 'USD', symbol: '$' },
  { value: 'GBP', symbol: '£' },
  { value: 'EUR', symbol: '€' },
  { value: 'INR', symbol: '₹' },
];

function BudgetAllocation() {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [changeAllocation, setChangeAllocation] = useState('');

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(currencies.find((c) => c.value === event.target.value));
  };

  const handleChangeAllocation = (event) => {
    setChangeAllocation(event.target.value);
  };

  return (
    <div className="budget-allocation">
      <h2>Change Allocation</h2>
      <label htmlFor="currency" className="currency-label">
        Currency:
      </label>
      <select value={selectedCurrency.value} onChange={handleCurrencyChange}>
        {currencies.map((currency) => (
          <option key={currency.value} value={currency.value}>
            {currency.symbol} ({currency.value})
          </option>
        ))}
      </select>

      <label htmlFor="change-allocation" className="change-allocation-label">
        Change Allocation:
      </label>
      <div className="change-allocation-input">
        <span className="currency-prefix">{selectedCurrency.symbol}</span>
        <input
          type="text"
          id="change-allocation"
          value={changeAllocation}
          onChange={handleChangeAllocation}
        />
      </div>

      {/* Rest of your component logic */}
    </div>
  );
}

export default BudgetAllocation;
