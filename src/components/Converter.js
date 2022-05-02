import React, { useState } from 'react';
import Amount from './Amount';
import './converter.css';

export default function Converter ({cryptoName, exchangeRate}) {
    const [value, setValue] = useState(0);

    const onChange = (value) => {
        setValue(value);
    }

    return (
        <div className='converter'>
            <Amount name="Euros" value={value} onChange={onChange}/>
            <Amount name={cryptoName} value={parseFloat(value * exchangeRate).toFixed(4)} disabled />
        </div>
    );
}