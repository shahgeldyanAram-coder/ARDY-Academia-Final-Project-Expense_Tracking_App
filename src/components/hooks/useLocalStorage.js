import { useState, useEffect } from "react";

// Custom hook for syncing state with localStorage
export const useLocalStorage = (key, initialValue) => {

    // Initialize state from localStorage or fallback to initialValue
    const [value, setValue] = useState(() => {
        const savedValue = localStorage.getItem(key);

        if (savedValue !== null) {
            return JSON.parse(savedValue);
        }

        return initialValue;
    });

    // Update localStorage whenever key or value changes
    useEffect(() => {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    }, [key, value]);

    // Return state and setter
    return [value, setValue];
};
