import * as React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import * as PropTypes from 'prop-types'
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons

// core components
import cardBodyStyle from "../../../vendor/material-dashboard-react/components/cardBodyStyle";

const useStyles = makeStyles(cardBodyStyle as any);

export function CardBody(props: any) {
  const classes = useStyles({} as any);
  const {className, children, plain, profile, ...rest} = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  children: PropTypes.node
};

export default CardBody;
