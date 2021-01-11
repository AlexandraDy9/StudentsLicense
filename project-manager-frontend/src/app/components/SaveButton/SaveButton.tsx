import * as React from "react";
import { SaveButtonProps } from "./types";
import { Button, createStyles, makeStyles } from "@material-ui/core";
import "./SaveButton.scss";
import { cn } from "../../utils";
import { connect } from "react-redux";
const bem = cn("save-button");

const useStyles = makeStyles(() =>
  createStyles({
    styledButton: {
      backgroundColor: "#D67D00",
      width: "80px",
      height: "35px",
      fontSize: "12px",
      color: "white",
      "&:hover": {
        backgroundColor: "#D67D00",
      },
    },
  })
);

function SaveButton(props: SaveButtonProps) {
  const classes = useStyles();
  const { literals, onClick } = props;

  return (
    <span className={bem("root")}>
      <Button
        className={classes.styledButton}
        onClick={onClick}
      >
        {literals["save"]}
      </Button>
    </span>
  );
}

const mapStateToProps = (state: any) => ({
  literals: state.literals
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);

