import {
  drawerWidth,
  transition,
  container
} from "../material-dashboard-react";

const adminStyle = (theme: any) => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
  },
  content: {
    height: "95vh"
  },
  container,
  map: {
    marginTop: "70px"
  }
});

export default adminStyle;
