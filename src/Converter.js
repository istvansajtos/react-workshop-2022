import Amount from './Amount.js';
import './Converter.css';
import React, {useState} from 'react';

function Converter({cryptoName, exchangeRate, header}) {
    const [convertedValue, setConvertedValue] = useState(0);
    const handleChange = event => {
        setConvertedValue(event.target.value * exchangeRate);
    }

    return (
        <span className='box'>
            {header}<br/>
            <Amount name="Euros" onChangeHandler={handleChange}/>
            <Amount name={cryptoName} value={convertedValue} readOnly={true} />
        </span>
    );
}

export default Converter;