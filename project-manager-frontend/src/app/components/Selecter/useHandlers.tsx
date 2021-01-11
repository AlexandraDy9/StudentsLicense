import {useState} from "react";
import {SimpleSelectProps} from "./types";

export const useHandlers = ({data, sendSelectedValue}: SimpleSelectProps) => {

  const [value, setValue] = useState({});

  const handleChange = (event: any) => {
    setValue(event.target.value);
    sendSelectedValue(data.find((x: any) => x.title === event.target.value));
  };

  return {
    value,
    handleChange
  };
};
