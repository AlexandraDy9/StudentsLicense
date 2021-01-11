import { Teacher } from './../../models/Teacher';
import { Student } from "../../models";

export interface LicenseDetailsProps {
  readonly literals: any;
  readonly student: Student;
  readonly teachers: Teacher[];
  readonly setCreatedStudent: (student: Student) => void;
  readonly getAllTeachers: () => void;
}

export interface HandlersProps {
  technologies: any;
  closeUpload: boolean;
  selectedTechnologies: any;
  addTechnology: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTitleChange: (event: any) => void;
  deleteTechnology: (technology: any) => void;
  handleClose: () => void;
  handleSave: (files: any) => void;
  handleOpen: () => void;
  handleGetTeachersOptions: () => any[];
  handleSelectedTeacher: (option: any) => void;
}
