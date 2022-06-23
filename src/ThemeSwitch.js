function ThemeSwitch({eventHandler, theme}) {
    return (
        <select onChange={eventHandler} value={theme.name}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    )
}

export default ThemeSwitch;