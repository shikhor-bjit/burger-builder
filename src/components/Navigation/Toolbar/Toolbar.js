import './Toolbar.css';
import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import ToggleDrawer from "../SideDrawer/ToggleDrawer/ToggleDrawer";

const Toolbar = props => {
    return (
        <div className={'Toolbar'}>
            <ToggleDrawer clicked={props.clicked}/>
            <Logo height={'80%'}/>
            <div className={'DesktopOnly'}>
                <NavigationItems/>
            </div>
        </div>
    );
};

Toolbar.propTypes = {};

export default Toolbar;