import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CustomTextFieldProps, HandlerProps } from "./types";
import { useHandlers } from "./useHandlers";
import { InputBase, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
  })
);

export function CustomTextField(props: CustomTextFieldProps) {
  const {
    defaultValue,
    onChange,
    nodeAfterInput,
    nodeBeforeInput,
    placeholder,
    className
  } = props;
  const handler: HandlerProps = useHandlers(props);
  const classes = useStyles(handler);

  return (
    <Paper component="form" className={classes.root + " " + className}>
      {nodeBeforeInput}

      <InputBase
        className={classes.input}
        placeholder={placeholder}
        value={defaultValue || ""}
        onChange={onChange}
      />
      {nodeAfterInput}
    </Paper>
  );
}
