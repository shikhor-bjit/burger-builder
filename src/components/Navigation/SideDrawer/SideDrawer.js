import React from 'react';
import './SideDrawer.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const SideDrawer = props => {
    return (
        <div className={'SideDrawer'}>
            <Logo height={'15%'}/>
            <NavigationItems/>
        </div>
    );
};

SideDrawer.propTypes = {};

export default SideDrawer;