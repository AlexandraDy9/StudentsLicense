import {ComponentType, ReactNode} from "react";
import {SvgIconProps} from "@material-ui/core";

export interface ButtonDrawerProps {
  readonly anchor: 'left' | 'right' | 'top' | 'bottom';
  readonly textButton: string;
  readonly icon?: any;
  readonly open?: boolean;
  readonly children: ReactNode;
}

export interface HandlerProps {
  openState: boolean;
  toggleDrawer: (value: boolean) => void;
}
