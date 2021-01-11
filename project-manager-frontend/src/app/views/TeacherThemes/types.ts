import { Project } from './../../models/Project';
import { Teacher } from './../../models/Teacher';

export interface TeacherThemesProps {
  readonly teacher: Teacher;
  readonly addTeacherProject: (project: Project) => void;
  readonly getTeacher: () => void;
}

export interface HandlersProps {
  chosenTheme: any;
  isEditable: boolean;
  addModalVisibility: boolean;
  sessionOptions: any;
  selectedSession: any;
  handleAddModalVisibility: (value: boolean) => void;
  handleThemeTitle: (event: any) => void;
  handleThemeDescription: (event: any) => void;
  handleSession: (option: any) => void;
  saveThemeDetails: () => void;
  modifyClick: (theme: any) => void;
}
