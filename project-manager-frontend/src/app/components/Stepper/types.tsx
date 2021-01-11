import {ReactNode} from "react";

export interface StepperProps {
  steps: string[];
  getStepsContent: (index: number) => ReactNode;
  hasSave?: boolean[];
  readonly saveMethod?: (index: number) => void;
  readonly enablePostButtons?: boolean[];
  readonly nextMethod?: (index: number) => void;
  readonly currentStep?: number;
  readonly backMethod: () => void;
}

export interface HandlerProps {
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
  activeStep: number;
}
