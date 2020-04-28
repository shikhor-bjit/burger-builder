import './Layout.css';
import React from "react";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
    state = {
        isSideDrawerOpen: false
    }

    closeSideDrawer = () => {
        this.setState({isSideDrawerOpen: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState(
            (prevState) => {
                return (
                    {isSideDrawerOpen: !prevState.isSideDrawerOpen}
                );
            }
        );
    }

    render() {
        return (
            <div className="Layout">
                <Toolbar clicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.isSideDrawerOpen}
                    clicked={this.closeSideDrawer}/>
                <BurgerBuilder/>
            </div>
        );
    }
}

export default Layout;