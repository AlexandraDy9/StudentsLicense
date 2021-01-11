import * as React from "react";
import * as PropTypes from 'prop-types'
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import typographyStyle from "../../../vendor/material-dashboard-react/components/typographyStyle";

const useStyles = makeStyles(typographyStyle as any);

export default function Success(props: any) {
  const classes = useStyles({} as any);
  const {children} = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.successText}>
      {children}
    </div>
  );
}

Success.propTypes = {
  children: PropTypes.node
};
