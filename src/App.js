import { useState } from 'react';
import './App.css';
import Amount from './components/Amount';

const calcExchangeRate = () => {
	return Math.random() * 10000;
}

function App() {
	const [value, setValue] = useState(0);
	const [exchangeRate, setExchangeRate] = useState(calcExchangeRate);

	return (
    	<div className="App">
			<Amount name="Euros" value={value} onChange={setValue}/>
			<Amount name="BTC" value={parseFloat(value * exchangeRate).toFixed(4)} disabled />
    	</div>
	);
}

export default App;
