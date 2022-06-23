import { useEffect, useState } from 'react';
import './App.css';
import Converter from './Converter.js';
import PremiumConvesion from './PremiumConversion.js';
import ThemeContext, { themes }  from './ThemeContext.js';

export function useCachedState(key, defaultValue) {
  const storedValue = window.localStorage.getItem(key);
  const [state, setState] = useState(() => JSON.parse(storedValue) || defaultValue);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

function App() {
  const [theme, setTheme] = useCachedState('theme', themes.light);
  const [items, setItems] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:3003/data')
    .then(resp => resp.json())
    .then(data => {
      setItems(data);
    })
  }, [])

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        {items.map(item => ( 
          <Converter key={item.id} cryptoName={item.name} exchangeRate={item.conversionRate} header={<strong>{item.name} converter</strong>} /> 
        ))}
      </ThemeContext.Provider>

      <br/><br/>

      <select onChange={event => setTheme(event.target.value === "light" ? themes.light : themes.dark)} value={theme.name}>
          <option value="light">Light</option>
					<option value="dark">Dark</option>
			</select>

      <br/><br/>

      <PremiumConvesion/>
    </div>
  );
}



export default App;