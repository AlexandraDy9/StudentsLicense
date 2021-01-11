import {useState, useEffect} from "react";
import {CheckboxListProps} from "./types";


export const useHandlers = ({data, onItemSelected, startValue}: CheckboxListProps) => {

  const [checked, setChecked] = useState([]);

  const handleToggle = (value: any) => {
    let checkedItems = checked.filter((o: any) => o.title === value.title);
    var newChecked = [];
    if (checkedItems.length > 0) {
      newChecked = checked.filter((o: any) => o.title !== value.title);
      setChecked(newChecked)
    } else {
      newChecked = [...checked, value];
      setChecked(newChecked);
    }
    onItemSelected(newChecked);
  };

  useEffect(() => {
    setChecked(startValue);
  }, [startValue]);


  const handleChecked = (value: any): boolean => {
    return checked.filter((o: any) => o.title === value.title).length > 0;
  };

  return {
    checked,
    handleToggle,
    handleChecked
  };
};
