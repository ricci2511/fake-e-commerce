import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const jsonItem = localStorage.getItem(key);
            return jsonItem ? JSON.parse(jsonItem) : initialValue;
        } catch (err) {
            console.log(err);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (err) {
            console.log(err);
        }
    };

    return [storedValue, setValue];
};

export default useLocalStorage;
