import React, {useContext} from 'react';
import './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";
import {AuthContext} from "../../../context/AuthContext/AuthContext";

const NavigationItems = props => {
    const {token, updateToken} = useContext(AuthContext);

    return (
        <ul className={'NavigationItems'}>
            {token ? <NavigationItem link={'/burger-builder'}>{'Burger Builder'}</NavigationItem> : null}
            {token ? <NavigationItem link={'/burger-builder/order-list'}>{'Order List'}</NavigationItem> : null}
            {
                token
                    ? <NavigationItem link={'/burger-builder/logout'}>{'Log Out'}</NavigationItem>
                    : <NavigationItem link={'/burger-builder/authenticate'}>{'Login'}</NavigationItem>
            }
        </ul>
    );
};

NavigationItems.propTypes = {};

export default NavigationItems;