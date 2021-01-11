import {useState} from "react";
import {CustomColorPickerProps} from "./types";

export const useHandlers = ({sendBackgroundColor, startColor}: CustomColorPickerProps) => {
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(startColor === null ? "black" : startColor);

  const [openPicker, setOpenPicker] = useState(false);

  const handleBackgroundColor = (color: any, event: any) => {
    setSelectedBackgroundColor(color.hex);
    sendBackgroundColor(color.hex, event);
  }

  const onOpenPickerColor = () => setOpenPicker(!openPicker);

  return {
    selectedBackgroundColor,
    handleBackgroundColor,
    openPicker,
    onOpenPickerColor,
  };
};
