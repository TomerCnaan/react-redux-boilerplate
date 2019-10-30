import { combineReducers } from "redux";
import todos from "./reducers/todoReducer";
import users from "./reducers/usersReducer";

export const mainReducer = combineReducers({
  todos,
  users
});
