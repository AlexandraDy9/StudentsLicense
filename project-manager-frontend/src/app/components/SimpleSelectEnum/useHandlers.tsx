import {useState} from "react";
import {SimpleSelectEnumProps} from "./types";

export const useHandlers = ({sendSelectedValue, startValue}: SimpleSelectEnumProps) => {
  const [value, setValue] = useState(startValue);

  const handleChange = (event: any) => {
    setValue(event.target.value);
    sendSelectedValue(event.target.value);
  };

  return {
    value,
    handleChange
  };
};
