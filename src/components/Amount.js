import React, { useState } from 'react';
import './amount.css';

export default function Amount({name, value, onChange}) {
    const [isNegative, setIsNegative] = useState(false);

    const onChangeHandler = (event) => {
        setIsNegative(event.currentTarget.value < 0);
        onChange(event.currentTarget.value);
    }

    return (
        <label className="amount">
            <span>{name}</span>
            <input
                className={isNegative ? 'negative' : ''}
                onChange={onChangeHandler}
                value={value}
                placeholder="0"
                step="0.1"
                type="number"
            />
        </label>
    );
}