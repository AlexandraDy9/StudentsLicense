export interface CheckboxListProps {
  readonly data: object[];
  readonly startValue: object[];
  readonly onItemSelected: (value: any[]) => void;
}

export interface HandlerProps {
  checked: any[];
  handleToggle: (value: object) => void;
  handleChecked: (value: object) => boolean
}
