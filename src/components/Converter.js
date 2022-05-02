import React, { useState } from 'react';
import Amount from './Amount';
import './converter.css';

export default function Converter ({cryptoName, exchangeRate, header, onChange}) {
    const [value, setValue] = useState(0);

    const onChangeHandler = (value) => {
        setValue(value);
        onChange();
    }

    return (
        <div className='converter'>
            {header && <div className="converter-header">{header}</div>}
            <Amount name="Euros" value={value} onChange={onChangeHandler}/>
            <Amount name={cryptoName} value={parseFloat(value * exchangeRate).toFixed(4)} disabled />
        </div>
    );
}