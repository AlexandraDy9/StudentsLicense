/*eslint-disable*/
import * as React from "react";
import classNames from "classnames";
import * as PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import {connect} from "react-redux";

import sidebarStyle from "../../../vendor/material-dashboard-react/components/sidebarStyle";
import Particles from "react-particles-js";
import { getLocalStorageElement } from "../../localStorage/local-storage";
import { Badge } from "@material-ui/core";

const useStyles = makeStyles(sidebarStyle as any);

function Sidebar(props: any) {
  const classes = useStyles({} as any);

  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName: string) {
    return window.location.href.indexOf(routeName) > -1;
  }

  const { color, logo, image, logoText, routes } = props;
  var links = (
    <List className={classes.list}>
      {routes.map((prop: any, key: any) => {
        var activePro = " ";
        var listItemClasses;

        listItemClasses = classNames({
          [" " + classes[color]]: activeRoute(prop.layout + prop.path),
        });

        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path),
        });
        if (prop.hideInNav) {
          return;
        }
        if(prop.path !== "/logout" && getLocalStorageElement("role") !== prop.role) {
          return;
        }
        if(prop.path === "/teacher-pending-list") {
          return (
              <NavLink
                to={prop.layout + prop.path}
                className={activePro + classes.item}
                activeClassName="active"
                key={key}
              >
              <ListItem button className={classes.itemLink + listItemClasses}>
                {typeof prop.icon === "string" ? (
                  <Icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive,
                    })}
                  >
                    {prop.icon}
                  </Icon>
                ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive,
                    })}
                  />
                )}
                <ListItemText
                  primary={props.rtlActive ? prop.rtlName : prop.name}
                  className={classNames(classes.itemText, whiteFontClasses, {
                    [classes.itemTextRTL]: props.rtlActive,
                  })}
                  secondary={
                    <b style={{color: "white"}}>
                      No: {props?.teacher?.students?.filter((student: any) => student?.license?.status === "pending").length}
                    </b>
                    }
                />
              </ListItem>
            </NavLink>
          )
        }
        return (
          <NavLink
                to={prop.layout + prop.path}
                className={activePro + classes.item}
                activeClassName="active"
                key={key}
              >
              <ListItem button className={classes.itemLink + listItemClasses}>
                {typeof prop.icon === "string" ? (
                  <Icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive,
                    })}
                  >
                    {prop.icon}
                  </Icon>
                ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive,
                    })}
                  />
                )}
                <ListItemText
                  primary={props.rtlActive ? prop.rtlName : prop.name}
                  className={classNames(classes.itemText, whiteFontClasses, {
                    [classes.itemTextRTL]: props.rtlActive,
                  })}
                />
              </ListItem>
            </NavLink>
        );
      })}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <a
        href="/"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive,
        })}
        target="_blank"
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );

  var particles = (
    <Particles
      className={classes.particles}
      params={{
        particles: {
          color: {
            value: "#000000",
          },
          line_linked: {
            color: {
              value: "#000000",
            },
          },
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
      }}
    ></Particles>
  );

  const validate = () => document.location.href.indexOf("login") === -1 && document.location.href.indexOf("register") === -1

  return (
    validate() && (
      <div>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={props.rtlActive ? "left" : "right"}
            open={props.open}
            classes={{
              paper: classNames(classes.drawerPaper, {
                [classes.drawerPaperRTL]: props.rtlActive,
              }),
            }}
            onClose={props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {particles}
            {brand}
            <div className={classes.sidebarWrapper}>{links}</div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            anchor={props.rtlActive ? "right" : "left"}
            variant="permanent"
            open
            classes={{
              paper: classNames(classes.drawerPaper, {
                [classes.drawerPaperRTL]: props.rtlActive,
              }),
            }}
          >
            {particles}
            {brand}
            <div className={classes.sidebarWrapper}>{links}</div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
      </div>
    )
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  color: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};

const mapStateToProps = (state: any) => ({
  teacher: state.teachers.teacher
});


export const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
