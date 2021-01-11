import * as React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {CustomColorPickerProps, HandlerProps} from "./types";
import {useHandlers} from "./useHandlers";
import {SketchPicker} from "react-color";
import Brightness1Icon from '@material-ui/icons/Brightness1';
import {IconButton} from "@material-ui/core";
//style
import "./CustomColorPicker.scss";
import cn from "../../utils/classNames";
import SimplePopover from "../Popover/SimplePopover";

const bem = cn("color-picker");

const useStyles = makeStyles(() =>
  createStyles({
    label: {
      color: (handler: any) => handler.selectedBackgroundColor,
    },
  })
);

export function CustomColorPicker(props: CustomColorPickerProps) {
  const handler: HandlerProps = useHandlers(props);
  const classes = useStyles(handler);

  return (
    <SimplePopover
      close={false}
      popoverHorizontal={"left"}
      clickObject={
        <IconButton
          edge="end"
          aria-label="comments"
        >
          <Brightness1Icon className={classes.label + " " + bem("icon")}/>
        </IconButton>
      }
    >
      <SketchPicker
        color={handler.selectedBackgroundColor}
        onChange={handler.handleBackgroundColor}/>
    </SimplePopover>
  );
}
