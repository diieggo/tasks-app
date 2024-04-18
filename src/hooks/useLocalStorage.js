import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(key);

      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        parsedItem = defaultValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
        setStoredValue(parsedItem);
      }

      setIsLoading(false);
    }, 2000);
  }, []);

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
