import { useContext } from "react"
import ThemeContext from "../ThemeContext"

export default function PremiumButton() {
    const appContext = useContext(ThemeContext);
    return(
        <span style={{"margin":"1rem"}} >
        {appContext.isPremium ? (
            <strong>💎 Premium conversion</strong>
        ) : (
            <button onClick={() => appContext.setIsPremium(true)}>
            😎 Become premium
            </button>   
        )}
        </span>
    )
}