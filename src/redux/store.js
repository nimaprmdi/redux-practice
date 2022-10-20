import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
export default store;
