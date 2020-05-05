import './Layout.css';
import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import {Route, Switch} from 'react-router-dom';
import OrderList from "../OrderList";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import Auth from "../../containers/Auth/Auth";

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
                <Switch>
                    <Route path={'/burger-builder'} exact component={BurgerBuilder}/>
                    <Route path={'/burger-builder/order-list'} exact component={OrderList}/>
                    <Route path={'/burger-builder/authenticate'} exact component={Auth}/>
                </Switch>
            </div>
        );
    }
}

export default Layout;