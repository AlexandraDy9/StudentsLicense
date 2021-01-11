import CustomInput from "../CustomInput/CustomInput";
import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import headerLinksStyle from "../../../vendor/material-dashboard-react/components/headerLinksStyle";

const useStyles = makeStyles(headerLinksStyle as any);

export default function SearchBar({placeholder, handleChange}: any) {

  const classes = useStyles({} as any);

  return (
    <div className={classes.searchWrapper}>
      <CustomInput
        formControlProps={{
          className: classes.margin + " " + classes.search
        }}
        inputProps={{
          placeholder: placeholder,
          inputProps: {
            "aria-label": placeholder,
            onChange: handleChange
          }
        }}
      />
    </div>
  );
}
