import {CheckboxListIconProps} from "../types";

export interface CustomListItemProps {
  readonly value: any;
  readonly key: number;
  readonly handleSelectedItem: (value: any) => void;
  readonly handleChecked: (value: any) => boolean;
  readonly handleSelectedColor: (value: any) => void;
  readonly handleSelectedLink: (value: any) => void;
}

export interface HandlerProps {
  color: string;
  link: string;
  handleSocialColor: (color: any) => void;
  handleLinkChange: (event: any) => void;
}
