import React, { useState } from 'react';
import './App.css';
import Amount from "./Amount.js";

function App() {
  const [euroValue, setEuroValue] = useState(0);
  const [btcValue, setBTCValue] = useState(0);
  const [btcTimeout, setBTCTimeout] = useState(0);
  const handleChange = event => {
    clearTimeout(btcTimeout);

    setEuroValue(event.target.value);
    setBTCValue(event.target.value * exchangeRate());

    const newTimeout = setTimeout(() => setBTCValue(0), 5000);
    setBTCTimeout(newTimeout);
  }

  return (
    <div className="App">
      <Amount name="Euros" value={euroValue} onChangeHandler={handleChange}/>
      <Amount name="$BTC" value={btcValue} readOnly={true} />
    </div>
  );
}

function exchangeRate() {
  return Math.random() * 10000;
}

export default App;
