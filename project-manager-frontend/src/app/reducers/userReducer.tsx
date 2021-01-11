import { LOGOUT, REGISTER } from "../actions/actionTypes";
import Action from "../api/StudentApi";

export interface State {
  error: string,
  success: string
}

const initialState: State = {
  error: null,
  success: null
};

export const userReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case REGISTER + '_SUCCESS': {
      return {
        error: state.error,
        success: action.payload
      }
    }

    case REGISTER + '_ERROR': {
      return {
        error: action.payload,
        success: state.success
      }
    }

    case LOGOUT + '_SUCCESS': {
      return {
        error: state.error,
        success: action.payload
      }
    }

    case LOGOUT + '_ERROR': {
      return {
        error: action.payload,
        success: state.success
      }
    }

    default:
      return state
  }
};
