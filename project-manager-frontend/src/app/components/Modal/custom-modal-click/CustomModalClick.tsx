import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import * as PropTypes from "prop-types";
import * as React from "react";
import {useEffect} from "react";

export function CustomModalClick(props: any) {

  const {className, children, closeModal, clickObject, ...rest} = props;
  const [open, setOpen] = React.useState(false);
  const classes = className;

  useEffect(() => {
    if (closeModal === false) {
      setOpen(closeModal);
    }
  }, [closeModal]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {React.cloneElement(clickObject, {onClick: handleOpen})}
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.children} {...rest}>{children}</div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

CustomModalClick.propTypes = {
  className: PropTypes.any,
  children: PropTypes.node,
  modal: PropTypes.any,
  closeModal: PropTypes.bool,
  clickObject: PropTypes.any
};

export default CustomModalClick;
