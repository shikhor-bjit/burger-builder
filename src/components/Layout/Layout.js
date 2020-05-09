import './Layout.css';
import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import {Route, Switch} from 'react-router-dom';
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import Auth from "../../containers/Auth/Auth";
import OrderList from "../OrderList/OrderList";
import PrivateRoute from "../PrivateRouter/PrivateRouter";
import Logout from "../../containers/Auth/Logout";

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
                    <PrivateRoute path={'/burger-builder'} exact component={BurgerBuilder}/>
                    <PrivateRoute path={'/burger-builder/order-list'} exact component={OrderList}/>
                    <Route path={'/burger-builder/authenticate'} exact component={Auth}/>
                    <Route path={'/burger-builder/logout'} exact component={Logout}/>
                </Switch>
            </div>
        );
    }
}

export default Layout;