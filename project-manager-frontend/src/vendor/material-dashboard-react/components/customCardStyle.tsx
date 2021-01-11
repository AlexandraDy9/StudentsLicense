import {hexToRgb, whiteColor} from "../material-dashboard-react";

const customCardStyle = (theme: any) => ({
  cardTitleWhite: {
    color: whiteColor,
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    textDecoration: "none",
    margin: 10
  },
  bgColor: {
    backgroundColor: whiteColor
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
    padding: 0
  },
  drawerButton: {
    marginRight: '2px',
    display: 'flex',
  },
  drawerHide: {
    display: 'none',
  },
  contentCard: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentCardShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 180,
  },
});

export default customCardStyle;
