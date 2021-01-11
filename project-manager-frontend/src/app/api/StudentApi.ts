import { Teacher } from './../models/Teacher';
import { EDIT_STUDENT_DETAILS, GET_STUDENT_DETAILS, SET_CREATED_STUDENT } from './../actions/actionTypes';
import { License, Student } from '../models';
import { ErrorAction, GetStudentDetailsAction, SetCreatedStudentAction, SuccessAction } from './../actions/actions';
import { Dispatch } from "redux";
import axios from "axios";
import { useTimeoutMessageRedux } from '../utils/useTimeoutMessageRedux';
import { getLocalStorageElement } from '../localStorage/local-storage';

export const getStudentDetailsSuccess = (payload: Student): GetStudentDetailsAction => {
  return {
    type: GET_STUDENT_DETAILS,
    payload,
  };
};

export const getStudentDetailsError = (error: string): ErrorAction => {
  return {
    type: GET_STUDENT_DETAILS + "_ERROR",
    payload: error,
  };
};

export const editStudentDetailsSuccess = (success: string): SuccessAction => {
  return {
    type: EDIT_STUDENT_DETAILS + '_SUCCESS',
    payload: success,
  };
};

export const editStudentDetailsError = (error: string): ErrorAction => {
  return {
    type: EDIT_STUDENT_DETAILS + "_ERROR",
    payload: error,
  };
};

export const fetchGetStudentDetails = () => {
  return (dispatch: Dispatch) => {
    getStudentDetailsApiAction(dispatch);
  };
};

const getStudentDetailsApiAction = async (dispatch: Dispatch) => {
  try {
    let email = getLocalStorageElement("email");
    const response = await axios.get("http://localhost:8080/api/students/" + email);
    if (response.data === undefined) {
      dispatch(getStudentDetailsSuccess(null));
    } else {
      dispatch(getStudentDetailsSuccess(response.data));
    }
  } catch (e) {
    useTimeoutMessageRedux(dispatch, getStudentDetailsError, "get.student.details.error");
  }
};

export const fetchAddStudentCoordinator = (teacherEmail: string) => {
  return async (dispatch: Dispatch) => {
    let email = getLocalStorageElement("email");
    axios
      .put("http://localhost:8080/api/students/" + email + "/update-teacher/" + teacherEmail)
      .then(() => {
          useTimeoutMessageRedux(dispatch, editStudentDetailsSuccess, "edit.student.details.success");
          getStudentDetailsApiAction(dispatch);
      })
      .catch(() => {
        useTimeoutMessageRedux(dispatch, editStudentDetailsError, "edit.student.details.error");
      });
  };
};

export const fetchAddStudentLicense = (student: Student) => {
  debugger;
  return async (dispatch: Dispatch) => {
    let email = getLocalStorageElement("email");
    debugger;
    axios
      .put("http://localhost:8080/api/students/" + email + "/add-license", student)
      .then(() => {
          useTimeoutMessageRedux(dispatch, editStudentDetailsSuccess, "edit.student.details.success");
          getStudentDetailsApiAction(dispatch);
      })
      .catch(() => {
        useTimeoutMessageRedux(dispatch, editStudentDetailsError, "edit.student.details.error");
      });
  };
};


export const fetchUpdateStudentLicense = (license: License) => {
  return async (dispatch: Dispatch) => {
    let email = getLocalStorageElement("email");

    axios
      .put("http://localhost:8080/api/students/" + email + "/update-license/", license)
      .then(() => {
          useTimeoutMessageRedux(dispatch, editStudentDetailsSuccess, "edit.student.details.success");
          getStudentDetailsApiAction(dispatch);
      })
      .catch(() => {
        useTimeoutMessageRedux(dispatch, editStudentDetailsError, "edit.student.details.error");
      });
  };
};

export const setCreatedStudent = (payload: Student): SetCreatedStudentAction => {
  return {
    type: SET_CREATED_STUDENT,
    payload
  };
};

export default interface Action {
  type: string;
  payload: Student[];
}
