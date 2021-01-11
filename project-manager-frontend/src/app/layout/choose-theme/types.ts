import { Student } from '../../models';
import { Project } from './../../models/Project';

export interface ChooseThemeProps {
  readonly projects: Project[];
  readonly getAllTopics: () => void;
  readonly student: Student;
  readonly setCreatedStudent: (student: Student) => void;
}

export interface HandlersProps {
  chosenTheme: any;
  chooseClick: (theme: any) => void;
  addModalVisibility: boolean;
  handleAddModalVisibility: (value: boolean) => void;

  createdTheme: any;
  isAddedTheme: any;
  handleThemeTitle: (event: any) => void;
  handleThemeDescription: (event: any) => void;
  saveThemeDetails: () => void;
}
