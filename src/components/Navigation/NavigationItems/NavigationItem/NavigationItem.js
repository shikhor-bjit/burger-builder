import React from 'react';
import './NavigationItem.css';
import {NavLink} from "react-router-dom";

const NavigationItem = props => {
    const link = props.link;
    return (
        <li className={'NavigationItem'}>
            <NavLink
                exact
                to={link}>
                {props.children}
            </NavLink>
        </li>
    );
};

NavigationItem.propTypes = {};

export default NavigationItem;