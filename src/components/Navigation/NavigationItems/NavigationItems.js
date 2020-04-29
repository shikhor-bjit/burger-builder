import React from 'react';
import './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => {
    return (
        <ul className={'NavigationItems'}>
            <NavigationItem link={'/burger-builder'} active={true}>{'Burger Builder'}</NavigationItem>
            <NavigationItem link={'/burger-builder'}>{'Place Order'}</NavigationItem>
        </ul>
    );
};

NavigationItems.propTypes = {};

export default NavigationItems;