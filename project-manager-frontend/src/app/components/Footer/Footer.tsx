/*eslint-disable*/
import * as React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import footerStyle from "../../../vendor/material-dashboard-react/components/footerStyle";
import {connect} from "react-redux";

const useStyles = makeStyles(footerStyle as any);

function Footer({literals}: any) {
  const classes = useStyles({} as any);
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={classes.block}>
                {literals['footer.home']}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#support" className={classes.block}>
                {literals['footer.support']}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#help" className={classes.block}>
                {literals['footer.help']}
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://enautics.com"
              target="_blank"
              className={classes.a}
            >
              eNautics,
            </a>
            &nbsp;
            {literals['footer.rightText']}
          </span>
        </p>
      </div>
    </footer>
  );
}


const mapStateToProps = ({literals}: any) => ({
  literals
});

export default connect(mapStateToProps)(Footer);
