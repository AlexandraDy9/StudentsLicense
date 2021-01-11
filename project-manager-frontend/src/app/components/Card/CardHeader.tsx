import * as React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import * as PropTypes from 'prop-types'
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import cardHeaderStyle from "../../../vendor/material-dashboard-react/components/cardHeaderStyle";
// @material-ui/icons

const useStyles = makeStyles(cardHeaderStyle as any);

export function CardHeader(props: any) {
  const classes = useStyles({} as any);
  const {className, children, color, plain, stats, icon, ...rest} = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className]: className !== undefined
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
    "white"
  ]),
  plain: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool,
  children: PropTypes.node
};

export default CardHeader;
