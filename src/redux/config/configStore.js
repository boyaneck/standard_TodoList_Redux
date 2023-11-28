import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

//리듀서 관리, state 관리
const rootReducer = combineReducers({ todos });

const store = createStore(rootReducer);

export default store;
