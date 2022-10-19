import React from "react";
import { connect } from "react-redux";
import { increase } from "../redux/counter/CounterAction";
{
    /*------------------------------------*\
       #Using Function to map to props 
    \*------------------------------------*/
}
const Counter = (props) => {
    return (
        <div>
            Counter {props.counter}
            <br />
            <button onClick={props.increase}>Increase Me</button>
        </div>
    );
};

const stateProps = (state) => {
    return {
        counter: state.counter,
    };
};

const actionProps = (dispatch) => {
    return {
        increase: () => dispatch(increase()),
    };
};

export default connect(stateProps, actionProps)(Counter);
