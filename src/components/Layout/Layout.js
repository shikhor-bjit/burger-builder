import './Layout.css';
import React from "react";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = () => {
    return (
        <div className="Layout">
            <Toolbar/>
            <SideDrawer/>
            <BurgerBuilder/>
        </div>
    );
}

export default Layout;