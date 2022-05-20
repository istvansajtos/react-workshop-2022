import React, { useContext, useEffect, useRef, useState } from 'react';
import './amount.css';
import ThemeContext from '../ThemeContext';

export default function Amount({name, value, onChange, disabled, focusOnMount}) {
    const [isNegative, setIsNegative] = useState(false);

    const theme = useContext(ThemeContext);
    const inputRef = useRef(null);

    const onChangeHandler = (event) => {
        setIsNegative(event.currentTarget.value < 0);
        onChange(event.currentTarget.value);
    }

    useEffect(()=>{
        if (focusOnMount) {
            inputRef.current.focus();
        }
    },[focusOnMount]);

    return (
        <label className={'amount ' + theme.theme}>
            <span>{name} </span>
            <input
                ref={inputRef}
                className={isNegative ? 'negative' : ''}
                onChange={onChangeHandler}
                value={value}
                readOnly={disabled}
                placeholder="0"
                step="0.1"
                type="number"
            />
        </label>
    );
}