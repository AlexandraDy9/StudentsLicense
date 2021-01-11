export interface CustomColorPickerProps {
  readonly sendBackgroundColor: (color: string, event: any) => void;
  readonly startColor: string;
}

export interface HandlerProps {
  selectedBackgroundColor: string;
  handleBackgroundColor: (color: any, event: any) => void;
  openPicker: boolean;
  onOpenPickerColor: () => void;
}
