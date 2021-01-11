import { Student } from "../../models";

export interface ChooseLicenseProps {
  literals: any;
  readonly student: Student;
  readonly handleAddStudentLicense: (student: Student) => void;
  readonly getStudent: () => void;
}

export interface HandlerProps {
  handleSave: () => void;
  enablePostButtons: boolean[];
  activeStep: number;
  backMethod: () => void;
  handleSaveFinalStep: () => void;
  error: any;
}
