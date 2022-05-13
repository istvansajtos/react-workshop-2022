import React, { useState } from 'react';
import './Amount.css';

function Amount(props) {
  const [negative, setNegative] = useState(false);
  const handleChange = event => {
    setNegative(event.target.value < 0 ? true : false);
    props.onChangeHandler(event);
  }

  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <input id={props.name} type="number" className={negative ? 'redborder' : ""} onChange={handleChange} value={props.value}/>
    </div>
  );
}

export default Amount;
