import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import * as React from "react";
import "./CustomModalSimple.scss";
import { HandlersProps, CustomModalSimpleProps } from "./types";
import { useHandlers } from "./useHandlers";
import { cn } from "../../../utils";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton } from "@material-ui/core";

const bem = cn("custom-modal");

export function CustomModalSimple(props: CustomModalSimpleProps) {
  const { children, putExitButton, title, width } = props;
  const handler: HandlersProps = useHandlers(props);

  return (
    <Modal
      className={bem("root")}
      disableBackdropClick={true}
      open={handler.open}
      onClose={handler.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={handler.open}>
        <div className={bem("children")}>
          <div className={bem("modal-container")} style={{  width: width || "60vh"}}>
            <div className={bem("modal-header")}>
              <p className={bem("title")}>{title}</p>
              {putExitButton && (
                <IconButton onClick={handler.handleClose}>
                  <ClearIcon />
                </IconButton>
              )}
            </div>
            {children}
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default CustomModalSimple;
