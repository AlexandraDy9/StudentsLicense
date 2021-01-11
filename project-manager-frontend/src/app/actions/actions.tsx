import { Teacher, Project, Student } from "../models";

export interface GetStudentDetailsAction {
  type: string;
  payload: Student;
}

export interface GetTeacherDetailsAction {
  type: string;
  payload: Teacher;
}

export interface GetAllTopicsAction {
  type: string;
  payload: Project[];
}

export interface GetAllTeachersAction {
  type: string;
  payload: Teacher[];
}

export interface SetCreatedStudentAction {
  type: string;
  payload: Student;
}

export interface ErrorAction {
  type: string;
  payload: string;
}

export interface SuccessAction {
  type: string;
  payload: string;
}

export interface LoadLiteralsAction {
  type: string;
  payload: any;
}
