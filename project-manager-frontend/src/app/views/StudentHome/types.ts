import { Student, Teacher } from "../../models";

export interface StudentHomeProps {
  readonly literals: any;
  readonly student: Student;
  readonly teachers: Teacher[];
  readonly getAllTeachers: () => void;
  readonly getStudentDetails: () => void;
  readonly handleUpdateStudentCoordinator: (teacherEmail: string) => void;
}

export interface HandlerProps {
  isEditMode: boolean;
  changeTeacherModalVisibility: boolean;
  handleChangeTeacherModalVisibility: (value: boolean) => void;
  onEditClick: () => void;
  handleGetTeachersOptions: () => any[];
  handleSelectedTeacher: (option: any) => void;
  changeTeacher: () => void;
}
