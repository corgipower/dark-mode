import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

function useDarkMode(initialValues) {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValues);
//useeffect checks if passed in key is t/f add/remove darkmode class
    useEffect(() => {
        const className = 'dark-mode';
        const element = window.document.body;

        darkMode === true ? element.classList.add(className) : element.classList.remove(className);
    }, [darkMode])
    return [darkMode, setDarkMode]
}

export default useDarkMode;