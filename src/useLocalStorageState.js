import { useState, useEffect } from "react";

export function useLocalStorageState(intitialState, key) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            return JSON.parse(storedValue);
        }
        return intitialState;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));   
    }, [value, key]);

    return [value, setValue];
};