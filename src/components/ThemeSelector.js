import { useContext } from "react"
import ThemeContext from "../ThemeContext"

export default function ThemeSelector() {
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