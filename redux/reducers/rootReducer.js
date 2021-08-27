import { combineReducers } from "redux";
import global from "./globalReducer"
import users from "./usersReducer"

const rootReducer = combineReducers({ global, users });

export default rootReducer;