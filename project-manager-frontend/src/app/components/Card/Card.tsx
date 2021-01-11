import * as React from "react";
// nodejs library that concatenates classes
import * as classNames from 'classnames';
// nodejs library to set properties for components
import * as PropTypes from 'prop-types'
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import cardStyle from "../../../vendor/material-dashboard-react/components/cardStyle";
// @material-ui/icons

const useStyles = makeStyles(cardStyle as any);

export function Card(props: any) {
  const classes = useStyles({} as any);
  const {className, children, plain, profile, chart, ...rest} = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool,
  children: PropTypes.node
};

export default Card;
