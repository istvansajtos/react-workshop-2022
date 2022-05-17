import React, { useContext, useState } from 'react';
import './Amount.css';
import ThemeContext from './ThemeContext.js';


function Amount(props) {
  const [negative, setNegative] = useState(false);
  const handleChange = event => {
    setNegative(event.target.value < 0 ? true : false);
    props.onChangeHandler(event);
  }

  const theme = useContext(ThemeContext);

  console.log(theme);

  return (
    <div>
      <span style={{ background: theme.background, color: theme.foreground }}>
      <label htmlFor={props.name}>{props.name}</label>
      <input id={props.name} type="number" className={negative ? 'redborder' : ""} onChange={handleChange} value={props.value} readOnly={props.readOnly}/>
      </span>
    </div>
  );
}

export default Amount;
