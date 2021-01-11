import {Switch, withStyles} from "@material-ui/core";

export const GreenSwitch = withStyles({
  switchBase: {
    color: "#73A20D",
    '&$track': "#73A20D",
    '&$checked': {
      color: "#406922",
    },
    '&$checked + $track': {
      backgroundColor: "#73A20D",
    },
  },
  checked: {},
  track: {},
})(Switch);
