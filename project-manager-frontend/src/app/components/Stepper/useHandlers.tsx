import * as React from "react";
import {StepperProps} from "./types";
import {useEffect} from "react";

export const useHandlers = ({nextMethod, currentStep, backMethod}: StepperProps) => {

  const [activeStep, setActiveStep] = React.useState(currentStep);

  useEffect(() => {
    if (currentStep) {
      setActiveStep(0);
    }
  }, []);

  useEffect(() => {
    if (currentStep < activeStep)
      handleBack();
    if (currentStep > activeStep)
      handleNext();
    setActiveStep(currentStep);
  }, [currentStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    nextMethod(activeStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    backMethod();
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return {
    activeStep,
    handleNext,
    handleBack,
    handleReset
  }
};
