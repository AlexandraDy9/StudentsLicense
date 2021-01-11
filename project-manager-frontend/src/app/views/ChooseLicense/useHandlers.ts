import { useHistory } from 'react-router-dom';
import { ChooseLicenseProps } from "./types";
import { useEffect, useState } from "react";
import { verifyIfUserIsAuthentificated } from "../../localStorage/local-storage";
import { ERROR_TIMEOUT } from '../../variables/constants';

export const useHandlers = ({ handleAddStudentLicense, student, getStudent }: ChooseLicenseProps) => {
  const history = useHistory();
  const [enablePostButtons, setEnablePostButtons] = useState([true, true, true]);
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState(null);
  const [goHome, setGoHome] = useState(false);

  useEffect(() => {
    verifyIfUserIsAuthentificated(history);
    setActiveStep(0);
    getStudent();
  }, []);

  const handleSave = () => {
    setActiveStep(activeStep + 1);
  };

  const backMethod = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSaveFinalStep = () => {
    if(student?.teacher && student?.license?.title) {
      handleAddStudentLicense({...student, license: {...student.license, status: ""}});
      setGoHome(true);
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    if(goHome){
      history.push("student-home")
    }
  }, [goHome])

  return {
    handleSave,
    enablePostButtons,
    activeStep,
    backMethod,
    handleSaveFinalStep,
    error
  };
};
