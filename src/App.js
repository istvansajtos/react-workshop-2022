import React, { useState } from 'react';
import './App.css';
import Amount from "./Amount.js";

function App() {
  const [value, setValue] = useState(0);
  const handleChange = event => setValue(event.target.value);

  return (
    <div className="App">
      <Amount name="Euros" value={value} onChangeHandler={handleChange}/>
    </div>
  );
}

export default App;
