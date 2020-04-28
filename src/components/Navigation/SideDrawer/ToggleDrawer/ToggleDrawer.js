import React from 'react';
import './ToggleDrawer.css';

const ToggleDrawer = props => {
    return (
        <div className={'ToggleDrawer'} onClick={props.clicked}>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

ToggleDrawer.propTypes = {};

export default ToggleDrawer;