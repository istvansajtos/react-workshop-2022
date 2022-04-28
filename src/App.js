import { useEffect, useState } from 'react';
import './App.css';
import Amount from './components/Amount';

const calcExchangeRate = () => {
	return Math.random() * 10000;
}

function App() {
	const [value, setValue] = useState(0);
	const [exchangeRate, setExchangeRate] = useState(calcExchangeRate);

	useEffect(() => {
		let timer = setTimeout(()=>{setExchangeRate(0)}, 5000);

		return () => {
			clearTimeout(timer);
		}
	},[value]);

	const onChange = (value) => {
		setValue(value);

		if (exchangeRate === 0) {
			setExchangeRate(calcExchangeRate);
		}
	}

	return (
    	<div className="App">
			<Amount name="Euros" value={value} onChange={onChange}/>
			<Amount name="BTC" value={parseFloat(value * exchangeRate).toFixed(4)} disabled />
    	</div>
	);
}

export default App;
