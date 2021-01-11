import { connectRouter } from 'connected-react-router';
import {combineReducers} from 'redux';
import literalsReducer from "./literalsReducer";
import { studentReducer } from './studentReducer';
import { teacherReducer } from './teacherReducer';
import { userReducer } from './userReducer';

export default function createRootReducer(history: any) {
  return combineReducers(
    {
      literals: literalsReducer,
      router: connectRouter(history),
      students: studentReducer,
      teachers: teacherReducer,
      users: userReducer
    },
  );
}
