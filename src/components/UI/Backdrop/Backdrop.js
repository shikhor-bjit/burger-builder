import React from 'react';
import './Backdrop.css';

const Backdrop = props => {
    const clicked = props.clicked;
    const shouldShow = props.show;
    return (
        shouldShow ? <div className={'Backdrop'} onClick={clicked}/> : null
    );
};

Backdrop.propTypes = {};
Backdrop.defaultProps = {
    shouldShow: false
};

export default Backdrop;