import { useState, useEffect } from "react";
import { MultiSelectProps } from "./types";
import { MultiSelectObject } from "./MultiSelectObject";
import { capitalize } from "../../utils/strings";

export const useHandlers = ({ options, startValues, onChange }: MultiSelectProps) => {
  const [convertedOptions, setConvertedOptions] = useState([]);
  const [selected, setSelected] = useState([]);

  const onSelect = (sel: any) => {
    setSelected(sel);
    var newObjects = [] as string[];
    sel?.map((val: MultiSelectObject) => {
      newObjects.push(val.value);
    });

    onChange(newObjects);
  }

  const convertToMultiSelectObject = (data: string[]) : MultiSelectObject[] => {
    var newObjects = [] as MultiSelectObject[];
    data?.map((val: string) => {
      newObjects.push({ label: capitalize(val), value: val });
    });

    return newObjects;
  }

  useEffect(() => {
    setConvertedOptions(convertToMultiSelectObject(options));
    setSelected(convertToMultiSelectObject(startValues));
  }, [startValues, options]);

  return {
    convertedOptions,
    selected,
    onSelect
  };
};
