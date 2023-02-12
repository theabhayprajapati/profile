import { useEffect, useState } from 'react';

function useLocalStorage(key: string, initialValue: string) {
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;
