import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseNumber, decreaseNumber } from "../redux/number/NumberAction";
{
    /*------------------------------------*\
       #Using Function to map to props 
    \*------------------------------------*/
}
const Number = (props) => {
    const number = useSelector((state) => state.number.number);
    const dispatch = useDispatch();

    return (
        <div>
            Number {number}
            <br />
            <button onClick={() => dispatch(increaseNumber())}>Increase Me</button>
            <button onClick={() => dispatch(decreaseNumber())}>Decrease Me</button>
        </div>
    );
};

export default Number;
