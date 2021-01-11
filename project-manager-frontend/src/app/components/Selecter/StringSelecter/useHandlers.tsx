import {StringSelectProps} from "./types";
import {useState} from "react";

export const useHandlers = ({data, sendSelectedValue, startValue}: StringSelectProps) => {

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
