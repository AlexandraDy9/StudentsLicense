export interface SimpleSelectProps {
  readonly data: object[];
  readonly startValue: string;
  readonly sendSelectedValue: (value: object) => void;
}

export interface HandlersProps {
  value: object;
  handleChange: (event: any) => void;
}
