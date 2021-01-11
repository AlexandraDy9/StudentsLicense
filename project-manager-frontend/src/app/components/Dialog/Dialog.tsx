import * as React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import * as PropTypes from "prop-types";

export default function AlertDialog(props: any) {

  const {handleCloseYes, handleCloseNo, open, title, text, yesText, noText} = props;

  return (
    <Dialog
      maxWidth={'xs'}
      fullWidth={true}
      open={open}
      onClose={handleCloseNo}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      {text !== undefined &&
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      }
      <DialogActions>
        <Button onClick={handleCloseYes} color="inherit">
          {yesText !== undefined ? yesText : "Yes"}
        </Button>
        <Button onClick={handleCloseNo} color="inherit" autoFocus>
          {noText !== undefined ? noText : "No"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

AlertDialog.propTypes = {
  text: PropTypes.any,
  title: PropTypes.string.isRequired,
  yesText: PropTypes.string,
  noText: PropTypes.string,
  handleCloseYes: PropTypes.func.isRequired,
  handleCloseNo: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};
