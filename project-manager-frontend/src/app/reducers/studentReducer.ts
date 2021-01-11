import { EDIT_STUDENT_DETAILS, GET_STUDENT_DETAILS, SET_CREATED_STUDENT } from "../actions/actionTypes";
import Action from "../api/StudentApi";
import { Student } from "../models";

export interface State {
  students: Student[],
  student: Student,
  error: string,
  success: string
}

const initialState: State = {
  students: [] as Student[],
  student: {} as Student,
  error: null,
  success: null
};

export const studentReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SET_CREATED_STUDENT: {
      return {
        students: [] as Student[],
        student: action.payload,
        error: state.error,
        success: state.success
      }
    }

    case GET_STUDENT_DETAILS: {
      return {
        students: [] as Student[],
        student: action.payload,
        error: state.error,
        success: state.success
      }
    }

    case GET_STUDENT_DETAILS + '_SUCCESS': {
      return {
        students: [] as Student[],
        student: state.student,
        error: state.error,
        success: action.payload
      }
    }

    case EDIT_STUDENT_DETAILS + '_ERROR': {
      return {
        students: [] as Student[],
        student: state.student,
        error: action.payload,
        success: state.success
      }
    }

    case EDIT_STUDENT_DETAILS + '_SUCCESS': {
      return {
        students: [] as Student[],
        student: state.student,
        error: state.error,
        success: action.payload
      }
    }

    default:
      return state
  }
};
