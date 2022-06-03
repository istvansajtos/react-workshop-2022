import { useEffect, useState } from 'react';
import './App.css';
import Converter from './Converter.js';
import ThemeContext, { themes }  from './ThemeContext.js';

function App() {
  const [theme, setTheme] = useState(themes.light);

  useEffect(()=> {
    fetch('http://localhost:3003/data')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    })
  }, [])

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Converter cryptoName="$BTC" exchangeRate="995" header={<strong>BTC converter</strong>} />
        <Converter cryptoName="$ETH" exchangeRate="1.2" header={<strong>ETH converter</strong>} />
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