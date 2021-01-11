import * as React from "react";
import * as PropTypes from 'prop-types'
import {makeStyles, useTheme} from "@material-ui/core/styles";

import {Divider, Drawer, IconButton} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import drawerStyle from "../../../vendor/material-dashboard-react/components/drawerStyle";

const useStyles = makeStyles(drawerStyle as any);

export default function CustomDrawer(props: any) {
  const classes = useStyles({} as any);
  const theme = useTheme();

  const {isClosed, sendHandler, ...rest} = props;

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isClosed}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => sendHandler(!isClosed)}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
        </IconButton>
      </div>
      <Divider/>
      <div {...rest}/>
    </Drawer>
  );
}

CustomDrawer.propsTypes = {
  isClosed: PropTypes.bool,
  sendHandler: PropTypes.func
};
