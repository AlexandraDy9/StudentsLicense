import * as React from "react";
import classNames from "classnames";
import * as PropTypes from 'prop-types'
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components

import headerStyle from "../../../vendor/material-dashboard-react/components/headerStyle";
import RegularButton from "../CustomButtons/Button";
import AdminNavbarLinks from "./AdminNavbarLinks";

const useStyles = makeStyles(headerStyle as any);

export default function Header(props: any) {
  const classes = useStyles({} as any);

  function makeBrand() {
    var name;
    props.routes.map((prop: any): any => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });
    return name;
  }

  const {color} = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/**
           * Here we create navbar brand, based on route name(which is required)
           * <RegularButton color="transparent" href="#" className={classes.title}>
           * </RegularButton>
           */}
        </div>
        <Hidden smDown implementation="css">
          <AdminNavbarLinks/>
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu/>
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
};
