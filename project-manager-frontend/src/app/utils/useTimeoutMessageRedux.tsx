import { loadLiterals } from "../reducers/literalsReducer";
import loadLang from "../variables";
import { ERROR_TIMEOUT } from "../variables/constants";

export const useTimeoutMessageRedux = (dispatch: any, func: any, messageLiterals: any = "", simpleMessage: any = "") => {
  setTimeout(() => {
    dispatch(func(null));
  }, ERROR_TIMEOUT);

  if(simpleMessage !== "") {
    dispatch(func(simpleMessage));
  }
  else if(messageLiterals !== "") {
    dispatch(func(loadLiterals(loadLang()).payload[messageLiterals]));
  }
}
