import React, { useState } from 'react';
import './Amount.css';

function Amount() {
  const [negative, setNegative] = useState(false);
  const handleChange = event => setNegative(event.target.value < 0 ? true : false);

  return (
    <div>
      <label htmlFor="euros">Euros</label>
      <input id="euros" type="number" className={negative ? 'redborder' : ""} onChange={handleChange} />
    </div>
  );
}

export default Amount;
