import { License, Student } from './../../../models';

export interface EditLicenseDetailsProps {
  readonly literals: any;
  readonly student: Student;
  readonly toggleEditMode: () => void;
  readonly putStudentDetails: (License: License) => void;
}

export interface HandlerProps {
  allTechnologies: any;
  technologies: any;
  closeUpload: boolean;
  selectedTechnologies: any;
  addTechnology: (event: React.ChangeEvent<HTMLInputElement>) => void;
  deleteTechnology: (technology: any) => void;
  handleDescription: (event: any) => void;
  handleClose: () => void;
  handleSave: (files: any) => void;
  handleOpen: () => void;
  onSaveButton: () => void;
}
