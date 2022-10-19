import { createStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterReducer";

const store = createStore(counterReducer);

export default store;
