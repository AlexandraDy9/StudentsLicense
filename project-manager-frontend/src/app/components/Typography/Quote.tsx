import * as React from "react";
import * as PropTypes from 'prop-types'
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import typographyStyle from "../../../vendor/material-dashboard-react/components/typographyStyle";

const useStyles = makeStyles(typographyStyle as any);

export default function Quote(props: any) {
  const classes = useStyles({} as any);
  const {text, author} = props;
  return (
    <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
}

Quote.propTypes = {
  text: PropTypes.node,
  author: PropTypes.node
};
