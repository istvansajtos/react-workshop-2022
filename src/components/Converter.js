import React, { useState } from 'react';
import Amount from './Amount';
import PropTypes from 'prop-types';
import './converter.css';

function Converter ({cryptoName, exchangeRate, header, onChange, focusOnMount}) {
    const [value, setValue] = useState(0);

    const onChangeHandler = (value) => {
        setValue(value);
        onChange();
    }

    return (
        <div className='converter'>
            {header && <div className="converter-header">{header}</div>}
            <Amount name="Euros" value={value} onChange={onChangeHandler} focusOnMount={focusOnMount} />
            <Amount name={cryptoName} value={value * exchangeRate} disabled />
        </div>
    );
}

Converter.propTypes = {
    cryptoName: PropTypes.string,
    exchangeRate: PropTypes.number,
    header: PropTypes.element,
    onChange: PropTypes.func,
    focusOnMount: PropTypes.bool
}

export default Converter;