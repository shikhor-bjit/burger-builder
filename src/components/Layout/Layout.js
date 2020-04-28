import './Layout.css';
import React from "react";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";

const Layout = () => {
    return (
        <div className="Layout">
            <div className="Menu">
                Menu, Toolbar
            </div>
            <BurgerBuilder/>
        </div>
    );
}

export default Layout;