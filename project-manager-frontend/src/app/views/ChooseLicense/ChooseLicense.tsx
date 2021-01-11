import * as React from "react";
import SimpleStepper from "../../components/Stepper/Stepper";
import { Card } from "../../components/Card";
import { ChooseLicenseProps, HandlerProps } from "./types";
//styles
import "./styles/ChooseLicense.scss";
import createRCStyle from "./styles/ChooseLicenseStyles";
import { makeStyles } from "@material-ui/core/styles";
import { cn } from "../../utils";
import { useHandlers } from "./useHandlers";
import ChooseTheme from "../../layout/choose-theme/mapping";
import LicenseDetails from "../../layout/license-details/mapping";
import ShowLicenseDetails from "../StudentHome/show-license-details/mapping";
import CustomSnackbar from "../../components/Snackbar/CustomSnackbar";
import { ERROR_TIMEOUT } from "../../variables/constants";

const useStyles = makeStyles(createRCStyle as any);

const bem = cn("choose-license");

export default function ChooseLicenseView(props: ChooseLicenseProps) {
  const { literals, student } = props;
  const classes = useStyles({} as any);
  const handler: HandlerProps = useHandlers(props);

  const getStepsContent = (stepIndex: number) => {
    switch (stepIndex) {
      //choose theme
      case 0:
        return <ChooseTheme />;
      //choose professor, choose title
      case 1:
        return <LicenseDetails />;
      case 2:
        return <ShowLicenseDetails createMode={true} />;
      default:
        return "Unknown stepIndex";
    }
  };

  const getNextMethod = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return handler.handleSave();
      case 1:
        return handler.handleSave();
      case 2:
        return handler.handleSaveFinalStep();
      default:
        return "Unknown stepIndex";
    }
  };

  return (
      <React.Fragment>
        {handler.error !== null && (
          <CustomSnackbar
            autoHideDuration={ERROR_TIMEOUT}
            place={"br"}
            message={"Date invalide."}
            color={"error"}
          />
        )}
        <Card className={bem("card") + " " + classes.card}>
          <SimpleStepper
            getStepsContent={getStepsContent}
            steps={literals["choose.license.steps"]}
            saveMethod={getNextMethod}
            enablePostButtons={handler.enablePostButtons}
            nextMethod={getNextMethod}
            currentStep={handler.activeStep}
            backMethod={handler.backMethod}
          />
        </Card>
      </React.Fragment>
    )
}
