import axios from "axios";
import { Dispatch } from "redux";
import { ErrorAction, SuccessAction } from "../actions/actions";
import { LOGOUT, REGISTER } from "../actions/actionTypes";
import { Student, Teacher } from "../models";
import { useTimeoutMessageRedux } from "../utils/useTimeoutMessageRedux";

export const registerSuccess = (success: string): SuccessAction => {
  return {
    type: REGISTER + "_SUCCESS",
    payload: success,
  };
};

export const registerError = (error: string): ErrorAction => {
  return {
    type: REGISTER + "_ERROR",
    payload: error,
  };
};

export const logoutSuccess = (success: string): SuccessAction => {
  return {
    type: LOGOUT + "_SUCCESS",
    payload: success,
  };
};

export const logoutError = (error: string): ErrorAction => {
  return {
    type: LOGOUT + "_ERROR",
    payload: error,
  };
};

export const fetchRegister = (user: Student | Teacher) => {
  return (dispatch: Dispatch) => {
    let api = "";
    if(user?.email?.includes("@student.unitbv.ro")) {
      api = "http://localhost:8080/api/user/register/student";
    } else if(user?.email?.includes("@unitbv.ro")) {
      api = "http://localhost:8080/api/user/register/teacher";
    }
    axios
      .post(api, user)
      .then(() => {
        useTimeoutMessageRedux(dispatch, registerSuccess, "register.success");
      })
      .catch(() => {
        useTimeoutMessageRedux(dispatch, registerError, "register.error");
      });
  };
};

export const fetchLogout = () => {
  return (dispatch: Dispatch) => {
    axios
      .get("http://localhost:8080/api/logout")
      .then(() => {
        useTimeoutMessageRedux(dispatch, logoutSuccess, "logout.success");
      })
      .catch(() => {
        //useTimeoutMessageRedux(dispatch, logoutError, "logout.error");
      });
  };
};
