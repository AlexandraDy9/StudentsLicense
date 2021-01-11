import {useState, useEffect} from "react";
import {CheckboxListIconProps} from "./types";

export const useHandlers = ({onItemSelected, startValue}: CheckboxListIconProps) => {
  const [checked, setChecked] = useState([]);

  useEffect(() => {
  }, [checked]);

  const handleToggle = (value: any) => {
    var checkedItems = [] as any[];
    if (checked !== undefined) {
      checkedItems = checked.filter((o: any) => o.type === value.type);
      var newChecked = [] as any[];
      if (checkedItems.length > 0) {
        newChecked = checked.filter((o: any) => o.type !== value.type);
        setChecked(newChecked);
      } else {
        newChecked = [...checked, value];
        setChecked(newChecked);
      }
    } else {
      newChecked = [value];
      setChecked(newChecked);
    }
    onItemSelected(newChecked);
  };

  const handleChecked = (value: any): boolean => {
    return checked !== undefined ? checked.filter((o: any) => o.type === value.type).length > 0 : false;
  };

  const handleColor = (value: any) => {
    let socialColors = [...checked];
    socialColors.forEach((item: any) => {
      if (value.type === item.type) {
        item.color = value.color;
      }
    });
    setChecked(socialColors);
    onItemSelected(socialColors);
  };

  const handleLink = (value: any) => {
    let socialLinks = [...checked];
    socialLinks.forEach((item: any) => {
      if (value.type === item.type) {
        item.link = value.link;
      }
    });
    setChecked(socialLinks);
    onItemSelected(socialLinks);
  };

  useEffect(() => {
    setChecked(startValue)
  }, [startValue]);


  return {
    checked,
    handleToggle,
    handleChecked,
    handleColor,
    handleLink
  };
};
