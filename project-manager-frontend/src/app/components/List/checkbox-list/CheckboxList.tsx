import * as React from "react";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {List, ListItem, ListItemIcon, ListItemText, Checkbox} from '@material-ui/core';
import {CheckboxListProps, HandlerProps} from './types';
import {useHandlers} from "./useHandlers";

//style
import "./CheckboxList.scss";
import cn from "../../../utils/classNames";

const bem = cn("checkbox-list");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      width: "50%",
      padding: "0px 0px 0px 10px",
    },
    listItemIcon: {
      minWidth: "0px",
    },
    icon: {
      color: "#1B1C33",
      '&$checked': {
        color: "#1B1C33",
      },
    }
  })
);

export function CheckboxList(props: CheckboxListProps) {
  const classes = useStyles();
  const {data} = props;

  const handler: HandlerProps = useHandlers(props);

  return (
    <List className={bem("list")}>
      {data !== undefined && data.map((value: any, key: number) => {
        const labelId = `checkbox-list-label-${key}`;

        return (
          <ListItem
            className={classes.listItem}
            key={key}
            dense
            button
            onClick={() => handler.handleToggle(value)}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <Checkbox className={classes.icon}
                        color="default"
                        edge="start"
                        checked={handler.handleChecked(value)}
                        inputProps={{"aria-labelledby": labelId}}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value.title}/>
          </ListItem>
        );
      })}
    </List>
  );
}
