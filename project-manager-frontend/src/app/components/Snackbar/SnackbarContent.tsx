import * as React from "react";
import * as PropTypes from 'prop-types'
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Snack from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import snackbarContentStyle from "../../../vendor/material-dashboard-react/components/snackbarContentStyle";

const useStyles = makeStyles(snackbarContentStyle as any);

export default function SnackbarContent(props: any) {
  const classes = useStyles({} as any);
  const {message, color, close, icon, rtlActive} = props;
  var action: any = [];
  const messageClasses = classNames({
    [classes.iconMessage]: icon !== undefined
  });
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
      >
        <Close className={classes.close}/>
      </IconButton>
    ];
  }
  return (
    <Snack
      message={
        <div>
          {icon !== undefined ? <props.icon className={classes.icon}/> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      classes={{
        root: classes.root + " " + classes[color],
        message: classes.message,
        action: classNames({[classes.actionRTL]: rtlActive})
      }}
      action={action}
    />
  );
}

SnackbarContent.propTypes = {
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: PropTypes.bool,
  icon: PropTypes.object,
  rtlActive: PropTypes.bool
};
