import React, { useState } from 'react';
import './CurrencyConverter.css'; // Import your CSS file

const currencies = [
  { value: 'USD', symbol: '$' },
  { value: 'GBP', symbol: '£' },
  { value: 'EUR', symbol: '€' },
  { value: 'INR', symbol: '₹' },
];

function CurrencyConverter() {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(currencies.find((c) => c.value === event.target.value));
  };

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>
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

      {/* Your conversion logic here, based on selectedCurrency */}

      {/* Example conversion logic (replace with your actual conversion logic) */}
      <p>You selected: {selectedCurrency.symbol} ({selectedCurrency.value})</p>
    </div>
  );
}

export default CurrencyConverter;
