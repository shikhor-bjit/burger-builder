import React from 'react';
import './SideDrawer.css';
import Aux from "../../hoc/Aux";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = props => {
    let attachedClasses = ['SideDrawer Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer Open'];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.clicked}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height={'15%'}/>
                <NavigationItems/>
            </div>
        </Aux>
    );
};

SideDrawer.propTypes = {};

export default SideDrawer;