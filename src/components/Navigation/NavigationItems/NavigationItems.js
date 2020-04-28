import React from 'react';
import './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => {
    return (
        <ul className={'NavigationItems'}>
            <NavigationItem link={'/'} active={true}>{'Burger Builder'}</NavigationItem>
            <NavigationItem link={'/'}>{'Checkout'}</NavigationItem>
        </ul>
    );
};

NavigationItems.propTypes = {};

export default NavigationItems;