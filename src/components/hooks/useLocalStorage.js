import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState(() => {
        const savedValue = localStorage.getItem(key);

        if (savedValue !== null) {
            return JSON.parse(savedValue);
        }

        return initialValue;
    });

    useEffect(() => {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    }, [key, value]);

    return [value, setValue];
};
