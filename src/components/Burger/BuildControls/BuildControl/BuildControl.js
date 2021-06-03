import React from 'react';
import classes from './BuilControl.css';

const buildControl = props=>{
    return (
        <div>
            <div>{props.label}</div>
            <button>More</button>
            <button>Less</button>
        </div>
        

    );
}

export default buildControl;