export interface SimpleSelectEnumProps {
  readonly data: string[];
  readonly placeholder?:string
  readonly startValue:string
  readonly sendSelectedValue: (value: string) => void;
}

export interface HandlersProps {
  value: string;
  handleChange: (event: any) => void;
}
