import Popover from '@material-ui/core/Popover';
import * as React from "react";
import {SimplePopoverProps, HandlersProps} from './types';
import {useHandlers} from './useHandlers';
import {cn} from '../../utils';

import "./SimplePopover.scss";

const bem = cn("simple-popover");

export default function SimplePopover(props: SimplePopoverProps) {
  const {clickObject, children, popoverHorizontal} = props;
  const handler: HandlersProps = useHandlers(props);

  return (
    <div>
      {React.cloneElement(clickObject, {onClick: handler.handleClick})}
      <Popover
        id={handler.id}
        open={handler.open}
        anchorEl={handler.anchorEl}
        onClose={handler.handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: popoverHorizontal,
        }}
      >
        <div className={bem("root")}>{children}</div>
      </Popover>
    </div>
  );
}
