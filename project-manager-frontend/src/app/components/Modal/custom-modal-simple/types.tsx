import { ReactNode } from "react";

export interface CustomModalSimpleProps {
  readonly modalVisibility: boolean;
  readonly children: ReactNode;
  readonly onClose?: () => void;
  readonly putExitButton?: boolean;
  readonly title?: string;
  readonly width?: any;
}

export interface HandlersProps {
  open: boolean;
  handleClose: () => void;
}
