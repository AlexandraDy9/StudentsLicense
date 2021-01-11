import {useEffect, useState} from "react";
import {ButtonDrawerProps} from "./types";

export const useHandlers = ({open}: ButtonDrawerProps) => {

  const [openState, setOpenState] = useState(false);

  useEffect(() => {
    if (!open)
      setOpenState(open);
  }, [open]);

  const toggleDrawer = (value: boolean) => {
    setOpenState(value);
  };

  return {
    openState,
    toggleDrawer
  }

};
