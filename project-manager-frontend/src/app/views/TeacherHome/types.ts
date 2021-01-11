import { Teacher, Student } from './../../models';

export interface TeacherHomeProps {
  readonly literals: any;
  readonly teacher: Teacher;
  readonly getTeacher: () => void;
  readonly setStudentNote: (note: number, student: Student) => void;
}

export interface HandlerProps {
  addModalVisibility: boolean;
  handleAddModalVisibility: (value: boolean) => void;
  handleStudentNote: (event: any) => void;
  saveStudentNote: (student: Student) => void;
}
