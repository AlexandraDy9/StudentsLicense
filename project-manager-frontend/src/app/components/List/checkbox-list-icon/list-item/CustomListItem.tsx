import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox, TextField,
} from "@material-ui/core";
import {CustomListItemProps, HandlerProps} from "./types";
import {useHandlers} from "./useHandlers";

//style
import "./CustomListItem.scss";
import cn from "../../../../utils/classNames";
import {ListItemSecondaryAction} from "@material-ui/core";
import {CustomColorPicker} from "../../../ColorPicker/CustomColorPicker";

const bem = cn("custom-list-item");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      width: "380px",
      padding: "0px 0px 0px 10px",
      height: 60,
      alignItems: "center",
      display: "flex"
    },
    listItemIcon: {
      minWidth: "0px",
    },
    icon: {
      color: "#1B1C33",
      "&$checked": {
        color: "#1B1C33",
      },
    },
    actionsBox: {
      display: "flex"
    }
  })
);

export function CustomListItem(props: CustomListItemProps) {
  const classes = useStyles();
  const {value, key, handleSelectedItem, handleChecked} = props;

  const handler: HandlerProps = useHandlers(props);

  const labelId = `checkbox-list-label-${key}`;

  return (
    <ListItem
      className={classes.listItem}
      key={key}
      dense
      button
      onClick={() => handleSelectedItem({...value, link: handler.link, color: handler.color})}
    >
      <ListItemIcon className={classes.listItemIcon}>
        <Checkbox
          className={classes.icon}
          color="default"
          edge="start"
          checked={handleChecked(value)}
          inputProps={{"aria-labelledby": labelId}}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={value.type}/>
      <ListItemSecondaryAction>
        <div className={classes.actionsBox}>
          <TextField
            defaultValue={value?.link ? value.link : ""}
            placeholder={"Link"}
            variant="outlined" onChange={handler.handleLinkChange}/>
          <CustomColorPicker
            startColor={value.color}
            sendBackgroundColor={handler.handleSocialColor}
          />
        </div>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
