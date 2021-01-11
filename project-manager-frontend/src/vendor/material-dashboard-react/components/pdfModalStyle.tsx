import shadows from "@material-ui/core/styles/shadows";
import cardStyle from "./cardStyle";
import {defaultFont, whiteColor} from "../material-dashboard-react";

const pdfModalStyle = {
  ...cardStyle,
  ...defaultFont,
  pdfViewer: {
    position: "relative",
    width: "100%",
    height: '100%',
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  modal: {
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '75%',
    maxWidth: '75%'
  },
  paper: {
    background: whiteColor,
    border: '2px solid #000',
    boxShadow: shadows[5]
  }
};

export default pdfModalStyle;
