import './Button.css';
import React from "react";

const Button = (props) => {
    let buttonClasses;
    switch (props.type) {
        case 'Success':
            buttonClasses = 'Success';
            break;
        case 'Danger':
            buttonClasses = 'Danger';
            break;
        default:
            buttonClasses = 'Default';
    }
    return (
        <div className={'Button'}>
            <button
                className={buttonClasses}
                onClick={props.clicked}>{props.children}
            </button>
        </div>
    );
};

export default Button;