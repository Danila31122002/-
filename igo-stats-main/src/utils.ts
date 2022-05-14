import { useEffect, useRef, useState } from 'react';

export const useOuterClick = (callback: any): any => {
    const callbackRef = useRef(); // initialize mutable ref, which stores callback
    const innerRef = useRef(); // returned to client, who marks "border" element

    // update cb on each render, so second useEffect has access to current value
    useEffect(() => {
        callbackRef.current = callback;
    });

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);

        function handleClick(e: any) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (innerRef.current && callbackRef.current && !innerRef.current.contains(e.target)) callbackRef.current(e);
        }
    }, []); // no dependencies -> stable click listener

    return innerRef; // convenience for client (doesn't need to init ref himself)
};

export const useLocalStorage = (key: string, initialValue: any) => {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value: any) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // TODO
        }
    };
    return [storedValue, setValue];
};
