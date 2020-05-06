import React from 'react';
import Order from "./Order/Order";
import axios from '../../axios-order';

class OrderList extends React.Component {
    state = {
        orders: null
    }

    componentDidMount() {
        axios.get(`/orders.json?auth=${localStorage.getItem('token')}`)
            .then(response => {
                this.setState({
                    orders: response.data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const content = this.state.orders === null
            ? <p>No Order Found</p>
            : Object.keys(this.state.orders).map(
                (key, i) => {
                    return <Order key={key} serial={i + 1} items={this.state.orders[key]}/>
                }
            );

        return (
            <div className={'OrderList'}>
                {content}
            </div>
        );
    }
}

export default OrderList;