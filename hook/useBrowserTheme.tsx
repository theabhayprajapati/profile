import { useEffect } from 'react';
import useLocalStorage from './useLocalstorage';

const useBrowserTheme = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    return theme;
};

export default useBrowserTheme;