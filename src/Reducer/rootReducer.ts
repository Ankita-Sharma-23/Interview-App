import { combineReducers } from "redux";
import { interviewReducer } from "./interviewReducer";
import reducer from "./reducer";


export default combineReducers({ interViews: interviewReducer,
userDetails:reducer });