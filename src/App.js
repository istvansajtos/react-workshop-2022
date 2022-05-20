import { useEffect, useState } from 'react';
import './App.css';
import Converter from './components/Converter';
import ThemeContext from './ThemeContext';
import useCachedState from './hooks/useCachedState';
import ThemeSelector from './components/ThemeSelector';
import PremiumButton from './components/PremiumButton';

const MAX_UNDISTURBED_CONVERSIONS = 5;

function App() {
	const [theme, setTheme] = useCachedState("theme", "light");
	const [conversions, setConversions] = useState(1);
	const [isPremium, setIsPremium] = useCachedState("premium", false)
	const [conversionList, setConversionList] = useState([]);

	const onCoversionChange = () => {
		if (!isPremium && conversions === MAX_UNDISTURBED_CONVERSIONS) {
			alert('Convert without limits by becoming a premium user')
			setConversions(1);
		} else {
			setConversions(conversions + 1);
		}
	}

  useEffect(()=> {
    fetch('http://localhost:3003/data')
    .then(resp => resp.json())
    .then(data => {
      setConversionList(data);
    })
  }, [])

	return (
		<ThemeContext.Provider value={{
			theme: theme,
			setTheme: setTheme,
			isPremium: isPremium,
			setIsPremium: setIsPremium
		}}>
			<div className={'App ' + theme}>
				{conversionList.map((item => {
					return <Converter key={item.id} focusOnMount={item.label === "ETH"} cryptoName={item.label} exchangeRate={item.conversionRate} onChange={onCoversionChange} header={<strong>{item.name} converter</strong>}/>
				}))}
				<br />
				<ThemeSelector />
				<PremiumButton />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
