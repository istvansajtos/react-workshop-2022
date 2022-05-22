import React, { useState } from 'react';
import './App.css';
import Converter from './Converter.js';
import ThemeContext, { themes }  from './ThemeContext.js';

function App() {
  const conversionTreshold = 5;
  const [convertCount, setConvertCount] = useState(0);
  const [theme, setTheme] = useState(themes.light);
  const count = () => {
    setConvertCount(convertCount + 1);

    if(convertCount == conversionTreshold) {
      alert('Convert without limits by becoming a premium user');
    }
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Converter cryptoName="$BTC" exchangeRate="995" header={<strong>BTC converter</strong>} onChange={count} />
        <Converter cryptoName="$ETH" exchangeRate="1.2" header={<strong>ETH converter</strong>} onChange={count} />
      </ThemeContext.Provider>

      <br/>

      <select onChange={event => setTheme(event.target.value == "light" ? themes.light : themes.dark)} >
          <option value="light">Light</option>
					<option value="dark">Dark</option>
			</select>
    </div>
  );
}



export default App;