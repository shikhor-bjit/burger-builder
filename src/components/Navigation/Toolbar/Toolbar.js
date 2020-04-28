import './Toolbar.css';
import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = props => {
    return (
        <div className={'Toolbar'}>
            <div>MENU</div>
            <Logo height={'80%'}/>
            <div className={'DesktopOnly'}>
                <NavigationItems/>
            </div>
        </div>
    );
};

Toolbar.propTypes = {};

export default Toolbar;