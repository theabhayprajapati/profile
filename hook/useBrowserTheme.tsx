
import { useEffect } from 'react';
import useCookie from './useCookie';
const useBrowserTheme = () => {
    const { value, setValue } = useCookie<string>('theme', 'light');
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            console.log('dark is the browser theme');
            setValue('dark');
        } else {
            setValue('light');
        }
    }, []);
    return value;
};

export default useBrowserTheme;