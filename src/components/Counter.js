import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../redux/counter/CounterAction";
{
    /*------------------------------------*\
       #Using Function to map to props 
    \*------------------------------------*/
}
const Counter = (props) => {
    const counter = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();

    return (
        <div>
            Counter {counter}
            <br />
            <button onClick={() => dispatch(increase())}>Increase Me</button>
            <button onClick={() => dispatch(decrease())}>Decrease Me</button>
        </div>
    );
};

export default Counter;
