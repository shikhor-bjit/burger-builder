import React from 'react';
import './NavigationItem.css';

const NavigationItem = props => {
    const link = props.link;
    const active = props.active;
    console.log('active: ', active)
    return (
        <li className={'NavigationItem'}>
            <a href={link}
               className={active ? 'active' : null}>
                {props.children}
            </a>
        </li>
    );
};

NavigationItem.propTypes = {};

export default NavigationItem;