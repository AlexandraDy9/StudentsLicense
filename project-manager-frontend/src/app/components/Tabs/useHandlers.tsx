import {useState} from "react";

export const useHandlers = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e: any, newValue: number) => {
    setValue(newValue);
  };

  return {
    value,
    handleChange
  };
};
