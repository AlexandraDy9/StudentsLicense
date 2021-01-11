import * as React from "react";
import {RefObject} from "react";
// nodejs library that concatenates classes
// nodejs library to set properties for components

import {Redirect, Route, Switch} from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import routes from "../../routes";

import adminStyle from "../../vendor/material-dashboard-react/layouts/adminStyle";
import Sidebar from "../components/Sidebar/Sidebar";
import {connect} from "react-redux";
// core components


const logo = 'https://ticket.unitbv.ro/logo.php';
let ps: any;

const switchRoutes = (
  <Switch>
    {routes.map((prop: any, key: any) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/" to="/dashboard"/>
  </Switch>
);

const useStyles = makeStyles(adminStyle as any);

function MainComponent({literals}: any, {...rest}) {
  // styles
  const classes = useStyles({} as any);
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel: RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
  // states and functions
  const [image, setImage] = React.useState('http://static.softwareengineer.ro/bg-image-menu.jpg');
  const [color, setColor] = React.useState("blue");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleImageClick = (image: any) => {
    setImage(image);
  };
  const handleColorClick = (color: string) => {
    setColor(color);
  };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {

    if (navigator.platform.indexOf("Win") > -1) {

      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });

      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        logo={logo}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        {/* <Header
                    routes={routes}
                    handleDrawerToggle={handleDrawerToggle}
                    {...rest}
                /> */}
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}

      </div>
    </div>
  );
}

const mapStateToProps = ({literals}: any) => ({
  literals
});

export default connect(mapStateToProps)(MainComponent);
