import { Student } from './../../models/Student';
import { Teacher } from '../../models';

export interface TeacherPendingListProps {
  readonly literals?: any;
  readonly teacher: Teacher;
  readonly getTeacher: () => void;
  readonly changeStudentStatus: (status: boolean, student: Student) => void;
}

export interface HandlerProps {
}
