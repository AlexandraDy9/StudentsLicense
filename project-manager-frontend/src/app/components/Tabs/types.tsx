import {ReactNode} from "react";

export interface CustomizedTabsProps {
  readonly tabs: ReactNode[];
  readonly tabsPanel: ReactNode[];
}

export interface HandlersProps {
  value: number;
  handleChange: (e: any, newValue: number) => void
}
