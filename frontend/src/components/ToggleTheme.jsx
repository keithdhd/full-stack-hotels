import { useTheme } from '../context/ThemeContext'

function ToggleTheme() {

    const { theme, setTheme } = useTheme();


    const toggleMe = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <button onClick={toggleMe}>Toggle Theme: {theme}</button>
    )
}

export { ToggleTheme }