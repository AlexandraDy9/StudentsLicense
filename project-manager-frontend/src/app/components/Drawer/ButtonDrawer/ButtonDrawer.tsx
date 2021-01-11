import * as React from "react";
import {Button, SwipeableDrawer} from "@material-ui/core";
import {ButtonDrawerProps, HandlerProps} from "./types";
import {useHandlers} from "./useHandlers";

export function ButtonDrawer(props: ButtonDrawerProps) {
  const {anchor, children, icon, textButton, open} = props;
  const handler: HandlerProps = useHandlers(props);

  return (
    <React.Fragment>
      <Button
        onClick={() => handler.toggleDrawer(true)}
        startIcon={icon ? icon : ''}
      >
        {textButton ? textButton : ''}
      </Button>
      <SwipeableDrawer
        anchor={anchor}
        open={handler.openState && open}
        onClose={() => handler.toggleDrawer(false)}
        onOpen={() => handler.toggleDrawer(true)}
      >
        {children}
      </SwipeableDrawer>
    </React.Fragment>
  );

}
