import {useEffect, useState} from "react";
import {SimplePopoverProps} from "./types";

export const useHandlers = (props: SimplePopoverProps) => {
  const {close} = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const open: boolean = Boolean(anchorEl);
  const id: string = open ? "simple-popover" : undefined;

  useEffect(() => {
  }, [open]);

  useEffect(() => {
    if (close === true)
      setAnchorEl(null);
  }, [close]);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    handleClick,
    handleClose,
    open,
    id,
  };
};
