import * as React from "react";
// nodejs library to set properties for components
import * as PropTypes from "prop-types";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    padding: "10px 15px !important"
  }
};

const useStyles = makeStyles(styles as any);

export function GridItem(props: any) {
  const classes = useStyles({} as any);
  const {children, ...rest} = props;
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

GridItem.propTypes = {
  children: PropTypes.node,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
};

export default GridItem;
