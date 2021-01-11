import {
  SuccessAction,
  GetTeacherDetailsAction,
} from "./../actions/actions";
import { Student } from "./../models/Student";
import { Teacher } from "../models/Teacher";
import { Project } from "./../models/Project";
import {
  ErrorAction,
  GetAllTeachersAction,
  GetAllTopicsAction,
} from "../actions/actions";
import {
  GET_ALL_TEACHERS,
  GET_ALL_PROJECTS,
  UPDATE_TEACHER,
  GET_TEACHER_DETAILS,
} from "./../actions/actionTypes";
import { Dispatch } from "redux";
import axios from "axios";
import { useTimeoutMessageRedux } from "../utils/useTimeoutMessageRedux";
import { getLocalStorageElement } from "../localStorage/local-storage";
import { editStudentDetailsError, editStudentDetailsSuccess } from "./StudentApi";

export const getAllTeachersProjectsSuccess = (payload: Project[]): GetAllTopicsAction => {
  return {
    type: GET_ALL_PROJECTS,
    payload,
  };
};

export const getAllTeachersProjectsError = (error: string): ErrorAction => {
  return {
    type: GET_ALL_PROJECTS + "_ERROR",
    payload: error,
  };
};

export const getAllTeachersSuccess = (payload: Teacher[]): GetAllTeachersAction => {
  return {
    type: GET_ALL_TEACHERS,
    payload,
  };
};

export const getAllTeachersError = (error: string): ErrorAction => {
  return {
    type: GET_ALL_TEACHERS + "_ERROR",
    payload: error,
  };
};

export const getTeacherDetailsSuccess = (payload: Teacher): GetTeacherDetailsAction => {
  return {
    type: GET_TEACHER_DETAILS,
    payload,
  };
};

export const getTeacherDetailsError = (error: string): ErrorAction => {
  return {
    type: GET_TEACHER_DETAILS + "_ERROR",
    payload: error,
  };
};

export const updateTeacherSuccess = (success: string): SuccessAction => {
  return {
    type: UPDATE_TEACHER,
    payload: success,
  };
};

export const updateTeacherError = (error: string): ErrorAction => {
  return {
    type: UPDATE_TEACHER + "_ERROR",
    payload: error,
  };
};

export const fetchGetAllTeachers = () => {
  return (dispatch: Dispatch) => {
    axios
      .get("http://localhost:8080/api/teachers")
      .then((response) => {
        if (response.data === undefined)
          dispatch(getAllTeachersSuccess(null));
        else dispatch(getAllTeachersSuccess(response.data));
      })
      .catch(() => {
        useTimeoutMessageRedux(dispatch, getAllTeachersError, "teachers.error");
      });
  };
};

export const fetchGetAllTeachersProjects = () => {
  return (dispatch: Dispatch) => {
    axios
      .get("http://localhost:8080/api/teachers/getAllProjects/")
      .then((response) => {
        if (response.data === undefined)
          dispatch(getAllTeachersProjectsSuccess(null));
        else dispatch(getAllTeachersProjectsSuccess(response.data));
      })
      .catch(() => {
        useTimeoutMessageRedux(dispatch, getAllTeachersProjectsError, "teachers.projects.error");
      });
  };
};

export const fetchGetTeacher = () => {
  return (dispatch: Dispatch) => {
    getTeacher(dispatch);
  };
};

const getTeacher = (dispatch: Dispatch) => {
    let email = getLocalStorageElement("email");

    axios
      .get("http://localhost:8080/api/teachers/byEmail/" + email)
      .then((response) => {
        if (response.data === undefined) dispatch(getTeacherDetailsSuccess(null));
        else dispatch(getTeacherDetailsSuccess(response.data));
      })
      .catch(() => {
        useTimeoutMessageRedux(dispatch, getTeacherDetailsError, "teacher.details.error");
      });
};

export const fetchChangeStudentStatus = (status: boolean, student: Student) => {
  return (dispatch: Dispatch) => {
    axios
      .put("http://localhost:8080/api/students/" + student.email + "/update-status/" + status)
      .then(() => {
        getTeacher(dispatch);
        useTimeoutMessageRedux(dispatch, editStudentDetailsSuccess, "edit.student.details.success");
      })
      .catch(() => {
        useTimeoutMessageRedux(dispatch, editStudentDetailsError, "edit.student.details.error");
      });
  };
};

export const fetchChangeStudentNote = (note: Number, student: Student) => {
  return (dispatch: Dispatch) => {
    axios
      .put("http://localhost:8080/api/students/" + student.email + "/update-note/" + note)
      .then(() => {
        getTeacher(dispatch);
        useTimeoutMessageRedux(dispatch, editStudentDetailsSuccess, "edit.student.details.success");
      })
      .catch(() => {
        useTimeoutMessageRedux(dispatch, editStudentDetailsError, "edit.student.details.error");
      });
  };
};

export const fetchAddTeacherProject = (project: Project) => {
  return (dispatch: Dispatch) => {
    let email = getLocalStorageElement("email");

    axios
      .put("http://localhost:8080/api/teachers/" + email + "/add-project", project)
      .then(() => {
        getTeacher(dispatch);
        useTimeoutMessageRedux(dispatch, updateTeacherSuccess, "edit.student.details.success");
      })
      .catch(() => {
        useTimeoutMessageRedux(dispatch, updateTeacherSuccess, "edit.student.details.error");
      });
  };
};

export default interface Action {
  type: string;
  payload: Teacher[];
}
