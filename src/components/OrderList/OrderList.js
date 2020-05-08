import React from 'react';
import Order from "./Order/Order";
import axios from '../../axios-order';
import Spinner from "../UI/Spinner/Spinner";

class OrderList extends React.Component {
    state = {
        orders: null,
        hasError: false,
        errMessage: '',
        loading: false
    }

    componentDidMount() {
        this.setState({loading: true});
        axios.get(`/orders.json?auth=${localStorage.getItem('token')}`)
            .then(response => {
                this.setState({
                    orders: response.data,
                    hasError: false,
                    loading: false
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({hasError: true, errMessage: error.message, loading: false});
            })
    }

    render() {
        let content = this.state.hasError
            ? <p style={
                {
                    backgroundColor: "crimson",
                    display: "block",
                    padding: "5px",
                    color: "white",
                    borderRadius: "5px",
                    textTransform: "capitalize",
                    boxSizing: "border-box",
                    width: "400px",
                    minWidth: "30%",
                    margin: "10px auto"
                }
            }>{this.state.errMessage}</p>
            : this.state.orders === null
                ? <p>No Order Found</p>
                : Object.keys(this.state.orders).map(
                    (key, i) => {
                        return <Order key={key} serial={i + 1} items={this.state.orders[key]}/>
                    }
                );
        if (this.state.loading) content = <Spinner>Loading...</Spinner>

        return (
            <div className={'OrderList'}>
                {content}
            </div>
        );
    }
}

export default OrderList;