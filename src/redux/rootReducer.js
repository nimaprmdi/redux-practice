import { combineReducers } from "redux";
import counterReducer from "./counter/CounterReducer";
import numberReducer from "./number/NumberReducer";

const rootReducer = combineReducers({
    number: numberReducer,
    counter: counterReducer,
});

export default rootReducer;
