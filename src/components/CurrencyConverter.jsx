import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const currencyList = ['USD', 'INR', 'EUR', 'JPY', 'GBP'];

const mockRates = {
  USD: 1,
  INR: 83,
  EUR: 0.85,
  JPY: 110,
  GBP: 0.75,
};

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [converted, setConverted] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');
    convert();
  }, [amount, fromCurrency, toCurrency]);

  const convert = () => {
    const rate = mockRates[toCurrency] / mockRates[fromCurrency];
    setConverted((amount * rate).toFixed(2));
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Currency Converter</h2>
      <input type="number" value={amount} onChange={(e) => setAmount(+e.target.value)} />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        {currencyList.map((cur) => <option key={cur} value={cur}>{cur}</option>)}
      </select>
      <span> ➡️ </span>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        {currencyList.map((cur) => <option key={cur} value={cur}>{cur}</option>)}
      </select>
      <h3>Converted: {converted} {toCurrency}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
