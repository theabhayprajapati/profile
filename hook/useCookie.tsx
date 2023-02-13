import Cookies from 'js-cookie';
import { useState } from 'react';

interface UseCookieResult<T> {
    value: T;
    setValue: (value: T) => void;
}

function useCookie<T>(key: string, initialValue: T): UseCookieResult<T> {
    const [value, setValue] = useState(() => {
        const cookieValue = Cookies.get(key);
        if (cookieValue) {
            try {
                return JSON.parse(cookieValue);
            } catch (error) {
                console.error(error);
            }
        }
        return initialValue;
    });

    const setCookieValue = (newValue: T) => {
        Cookies.set(key, JSON.stringify(newValue));
        setValue(newValue);
    };

    return { value, setValue: setCookieValue };
}

export default useCookie;