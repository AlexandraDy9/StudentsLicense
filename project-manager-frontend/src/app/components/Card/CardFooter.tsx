import * as React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import * as PropTypes from 'prop-types'
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons

// core components
import cardFooterStyle from "../../../vendor/material-dashboard-react/components/cardFooterStyle";

const useStyles = makeStyles(cardFooterStyle as any);

export function CardFooter(props: any) {
  const classes = useStyles({} as any);
  const {className, children, plain, profile, stats, chart, ...rest} = props;
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile,
    [classes.cardFooterStats]: stats,
    [classes.cardFooterChart]: chart,
    [className]: className !== undefined
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  stats: PropTypes.bool,
  chart: PropTypes.bool,
  children: PropTypes.node
};

export default CardFooter;
