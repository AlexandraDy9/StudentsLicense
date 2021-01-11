import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {List} from "@material-ui/core";
import {CheckboxListIconProps, HandlerProps} from "./types";
import {useHandlers} from "./useHandlers";

//style
import "./CheckboxListIcon.scss";
import cn from "../../../utils/classNames";
import {CustomListItem} from "./list-item/CustomListItem";

const bem = cn("checkbox-list-icon");

export function CheckboxListIcon(props: CheckboxListIconProps) {
  const {data} = props;

  const handler: HandlerProps = useHandlers(props);

  return (
    <List className={bem("list")}>
      {data !== undefined &&
      data.map((value: any, key: number) => {
        const labelId = `checkbox-list-label-${key}`;

        return (
          <CustomListItem
            value={value}
            key={key}
            handleSelectedLink={handler.handleLink}
            handleChecked={handler.handleChecked}
            handleSelectedItem={handler.handleToggle}
            handleSelectedColor={handler.handleColor}
          />
        );
      })}
    </List>
  );
}
