import { useState } from 'react';
import './App.css';
import Amount from './components/Amount';

function App() {
	const [value, setValue] = useState(0);

	return (
    	<div className="App">
			<Amount name="Euros" value={value} onChange={setValue}/>
    	</div>
	);
}

export default App;
