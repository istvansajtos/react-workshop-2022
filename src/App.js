import { useEffect, useState } from 'react';
import './App.css';
import Converter from './Converter.js';
import ThemeContext, { themes }  from './ThemeContext.js';

function App() {
  const [theme, setTheme] = useState(themes.light);
  const [premium, setPremium] = useState(false);

  useEffect(()=> {
    fetch('http://localhost:3003/data')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    })
  }, [])

  const premiumSection =
    premium === true ?
      <span><g-emoji class="g-emoji" alias="gem" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f48e.png">💎</g-emoji> Premium conversion</span> : 
      <button type="button" onClick={() => setPremium(true)}>Become Premium</button>;

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Converter cryptoName="$BTC" exchangeRate="995" header={<strong>BTC converter</strong>} />
        <Converter cryptoName="$ETH" exchangeRate="1.2" header={<strong>ETH converter</strong>} />
      </ThemeContext.Provider>

      <br/><br/>

      <select onChange={event => setTheme(event.target.value == "light" ? themes.light : themes.dark)} >
          <option value="light">Light</option>
					<option value="dark">Dark</option>
			</select>

      <br/><br/>

      {premiumSection}
    </div>
  );
}



export default App;