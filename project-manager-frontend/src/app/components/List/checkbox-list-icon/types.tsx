import {ReactElement} from "react";

export interface CheckboxListIconProps {
  readonly data: object[];
  readonly icon: ReactElement;
  readonly startValue: object[];
  readonly onItemSelected: (value: object[]) => void;
}

export interface HandlerProps {
  checked: any[];
  handleToggle: (value: object) => void;
  handleChecked: (value: object) => boolean;
  handleColor: (value: object) => void;
  handleLink: (value: object) => void;
}
