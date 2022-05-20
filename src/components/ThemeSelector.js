import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import PropTypes from 'prop-types';

function ThemeSelector() {
    const appContext = useContext(ThemeContext);
    return(
        <label style={{"margin":"1rem"}}>
            <span>Theme </span>
            <select
                onChange={event => appContext.setTheme(event.target.value)}
                value={appContext.theme}
            >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>
        </label>
    )
}

ThemeSelector.propTypes = {
    theme: PropTypes.string,
    setTheme: PropTypes.func
}

export default ThemeSelector;