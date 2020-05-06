import './Order.css';
import React from 'react';

const Order = props => {
    return (
        <div className={'Order'}>
            <strong>Order: {props.serial}</strong>
            <ul>
                {Object.keys(props.items).map(
                    (key, i) => {
                        return <li key={key + i}>{key} : {props.items[key]}</li>
                    }
                )}
            </ul>
        </div>
    );
};

Order.propTypes = {};

export default Order;