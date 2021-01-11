import {ReactElement, ReactNode} from "react";

export interface SimplePopoverProps {
  readonly children: ReactNode;
  readonly close: boolean;
  readonly popoverHorizontal: any;
  readonly clickObject: ReactElement;
}

export interface HandlersProps {
  anchorEl: Element;
  handleClick: (event: any) => void;
  handleClose: () => void;
  open: boolean;
  id: string;
}
