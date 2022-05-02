import { useState } from 'react';
import './App.css';
import Converter from './components/Converter';
import ThemeContext from './ThemeContext';

function App() {
	const [theme, setTheme] = useState("light");

	return (
		<ThemeContext.Provider value={{theme: theme}}>
			<div className={'App ' + theme}>
				<Converter cryptoName={"BTC"} exchangeRate={992} header={<strong>Bitcoin converter</strong>}/>
				<Converter cryptoName={"ETH"} exchangeRate={1.2} header={<strong>Ethernium converter</strong>}/>
				<label>
					<span>Theme </span>
					<select
						onChange={event => setTheme(event.target.value)}
						value={theme}
					>
						<option value="dark">Dark</option>
						<option value="light">Light</option>
					</select>
				</label>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
