import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {HandlerProps, StepperProps} from "./types";
import {useHandlers} from "./useHandlers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      width: "100%",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    extraButtonsContainer: {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%"
    },
    buttonsContainer: {
      display: "flex",
      paddingBottom: 20
    }
  })
);

export default function SimpleStepper(props: StepperProps) {
  const classes = useStyles();
  const {steps, getStepsContent, hasSave, saveMethod, enablePostButtons, currentStep} = props;
  const handler: HandlerProps = useHandlers(props);

  return (
    <div className={classes.root}>
      <Stepper activeStep={handler.activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {handler.activeStep === steps?.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handler.handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepsContent(handler.activeStep)}
            </Typography>
            <div className={classes.buttonsContainer}>
              <Button
                disabled={handler.activeStep === 0}
                onClick={handler.handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handler.handleNext}
                disabled={!enablePostButtons[handler.activeStep]}
              >
                {handler.activeStep === steps.length - 1 ? "Save" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
