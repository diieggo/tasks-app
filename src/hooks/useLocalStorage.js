import { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
        const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue;
    }
  });

  const setValue = (value) => {
    try {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value))
    } catch {
        console.error("Error: Can't update Local Storage")
    }
  };

  return [storedValue, setValue];
};

export { useLocalStorage }