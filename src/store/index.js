import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "./Reducers";

const middlewares = [thunk];

const store = createStore(reducer, applyMiddleware(...middlewares));

console.log(store.getState());

export default store;
