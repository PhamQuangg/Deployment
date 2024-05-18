import { useEffect, useState } from "react";

export const useLocalStorage = (name) => {
  const [value, setValue] = useState(0);
  // Load the value from localStorage
  useEffect(() => {
    setValue(Number(localStorage.getItem(name)));
  }, [name]);

  // Save the value to localStorage
  useEffect(() => {
    if (value !== 0) {
      localStorage.setItem(name, value);
    }
  }, [value, name]);

  return [value, setValue];
};