import React from 'react';
import './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => {
    return (
        <ul className={'NavigationItems'}>
            <NavigationItem link={'/burger-builder'}>{'Burger Builder'}</NavigationItem>
            <NavigationItem link={'/burger-builder/order-list'}>{'Order List'}</NavigationItem>
            <NavigationItem link={'/burger-builder/authenticate'}>{'Authenticate'}</NavigationItem>
        </ul>
    );
};

NavigationItems.propTypes = {};

export default NavigationItems;