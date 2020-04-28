import './Layout.css';
import React from "react";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
    state = {
        isSideDrawerOpen: true
    }

    closeSideDrawer = () => {
        this.setState({isSideDrawerOpen: false});
    }

    render() {
        return (
            <div className="Layout">
                <Toolbar/>
                <SideDrawer open={this.state.isSideDrawerOpen} clicked={this.closeSideDrawer}/>
                <BurgerBuilder/>
            </div>
        );
    }
}

export default Layout;