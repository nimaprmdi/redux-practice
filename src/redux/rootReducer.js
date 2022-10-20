import { combineReducers } from "redux";
import counterReducer from "./counter/CounterReducer";
import numberReducer from "./number/NumberReducer";
import userReducer from "./users/UsersReducer";
import users1Reducer from "./users1/userReducer";

const rootReducer = combineReducers({
    number: numberReducer,
    counter: counterReducer,
    usersState: userReducer,
    users1State: users1Reducer,
});

export default rootReducer;
