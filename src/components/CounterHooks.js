import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase } from "../redux/counter/CounterAction";

{
    /*------------------------------------*\
       #Using Hooks
    \*------------------------------------*/
}

const Counter = (props) => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            Counter {counter}
            <br />
            <button onClick={() => dispatch(increase())}>Increase Me</button>
        </div>
    );
};

export default Counter;
