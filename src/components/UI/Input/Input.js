import './Input.css';
import React from 'react';

const Input = props => {
    return (
        <div className={'Input'}>
            <label>{props.inputlable}</label>
            <input {...props}/>
        </div>
    );
};

Input.propTypes = {};

export default Input;