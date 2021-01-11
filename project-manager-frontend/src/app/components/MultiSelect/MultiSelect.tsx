import * as React from "react";
import { MultiSelectProps, HandlersProps } from "./types";
import { useHandlers } from "./useHandlers";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function MultiSelect(props: MultiSelectProps) {
  const { placeholder } = props;
  const handler: HandlersProps = useHandlers(props);
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      value={handler.selected}
      isMulti
      options={handler.convertedOptions}
      onChange={handler.onSelect}
      isSearchable
      placeholder={placeholder ? placeholder : "Select..."}
    />
  );
}
