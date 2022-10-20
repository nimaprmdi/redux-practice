import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../redux/counter/CounterAction";
{
    /*------------------------------------*\
       #Using Function to map to props 
    \*------------------------------------*/
}
const Counter = (props) => {
    const [value, setValue] = useState(1);
    const counter = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();

    return (
        <div>
            Counter {counter}
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <br />
            <button onClick={() => dispatch(increase(+value))}>Increase Me</button>
            <button onClick={() => dispatch(decrease(+value))}>Decrease Me</button>
        </div>
    );
};

export default Counter;
