import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    const toggleMode = e => {
        console.log(darkMode);
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return [darkMode, toggleMode];
}