import { Project } from './../models/Project';
import { Teacher } from '../models/Teacher';
import { UPDATE_TEACHER, GET_ALL_TEACHERS, GET_ALL_PROJECTS, GET_TEACHER_DETAILS } from "../actions/actionTypes";
import Action from "../api/StudentApi";

export interface State {
  projects: Project[],
  teachers: Teacher[],
  teacher: Teacher,
  error: string,
  success: string
}

const initialState: State = {
  projects: [] as Project[],
  teachers: [] as Teacher[],
  teacher: {} as Teacher,
  error: null,
  success: null
};

export const teacherReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case UPDATE_TEACHER + '_ERROR': {
      return {
        projects: [...state.projects],
        teachers: [] as Teacher[],
        teacher: state.teacher,
        error: action.payload,
        success: state.success
      }
    }

    case UPDATE_TEACHER + '_SUCCESS': {
      return {
        projects: [...state.projects],
        teachers: [] as Teacher[],
        teacher: state.teacher,
        error: state.error,
        success: action.payload
      }
    }

    case GET_ALL_TEACHERS: {
      return {
        projects: [] as Project[],
        teachers: [...action.payload],
        teacher: {} as Teacher,
        error: state.error,
        success: state.success
      }
    }

    case GET_ALL_TEACHERS + '_ERROR': {
      return {
        projects: [] as Project[],
        teachers: [...state.teachers],
        teacher: {} as Teacher,
        error: action.payload,
        success: state.success
      }
    }

    case GET_ALL_PROJECTS: {
      return {
        projects: [...action.payload],
        teachers: [] as Teacher[],
        teacher: {} as Teacher,
        error: state.error,
        success: state.success
      }
    }

    case GET_ALL_PROJECTS + '_ERROR': {
      return {
        projects: [...state.projects],
        teachers: [] as Teacher[],
        teacher: {} as Teacher,
        error: action.payload,
        success: state.success
      }
    }

    case GET_TEACHER_DETAILS: {
      return {
        projects: [] as Project[],
        teachers: [] as Teacher[],
        teacher: {...action.payload},
        error: state.error,
        success: state.success
      }
    }

    case GET_TEACHER_DETAILS + '_ERROR': {
      return {
        projects: [] as Project[],
        teachers: [] as Teacher[],
        teacher: state.teacher,
        error: action.payload,
        success: state.success
      }
    }

    default:
      return state
  }
};
