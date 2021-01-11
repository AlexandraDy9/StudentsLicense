import * as React from "react";
import { ColoredButtonProps } from "./types";
import { Button, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    styledButton: {
      backgroundColor: (props: any) => props?.backgroundColor || "black",
      width: "80px",
      height: "35px",
      fontSize: "12px",
      color: "white",
      "&:hover": {
        backgroundColor: (props: any) => props?.backgroundColor || "black",
      },
    },
  })
);

export default function ColoredButton(props: ColoredButtonProps) {
  const classes = useStyles(props);
  const { onClick, title } = props;

  return (
    <Button className={classes.styledButton} onClick={onClick}>
      {title}
    </Button>
  );
}
