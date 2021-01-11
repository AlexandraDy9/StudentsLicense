import shadows from "@material-ui/core/styles/shadows";
import {whiteColor} from "../material-dashboard-react";

const modalStyle = {
  image: {
    width: "100%",
    height: "100%",
    cursor: 'pointer'
  },
  modal: {
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '70%',
    maxWidth: '70%'
  },
  imageMaxSize: {
    maxHeight: '100%',
    maxWidth: '100%'
  },
  paper: {
    background: whiteColor,
    border: '2px solid #000',
    boxShadow: shadows[5]
  }
};

export default modalStyle;
