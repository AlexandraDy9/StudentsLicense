import { useEffect, useState } from "react";
import { CustomModalSimpleProps } from "./types";

export const useHandlers = ({ modalVisibility, onClose }: CustomModalSimpleProps) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(modalVisibility);
  }, [modalVisibility])

  const handleClose = () => {
    if(onClose) {
      onClose();
    }
    setOpen(false);
  };

  return {
    open,
    handleClose,
  };
};
