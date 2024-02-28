import { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      setError(true);
      console.error("Error: Can't update Local Storage");
      console.log(e);
    }
  };

  return { storedValue, setValue, isLoading, error };
};

export { useLocalStorage };
