import { MultiSelectObject } from "./MultiSelectObject";

export interface MultiSelectProps {
  readonly options: string[];
  readonly startValues: string[];
  readonly placeholder?: string;
  readonly onChange: (values: any) => void;
}

export interface HandlersProps {
  convertedOptions: MultiSelectObject[];
  selected: MultiSelectObject[];
  onSelect: (sel: any) => void;
}
