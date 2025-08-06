import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import userReducer from "./useReducer";

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
