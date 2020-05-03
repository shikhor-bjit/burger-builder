import React from 'react';
import './OrderSummary.css';
import Button from "../UI/Button/Button";

const OrderSummary = (props) => {
    const cancelOrder = props.clicked;
    const proceedOrder = props.proceedOrder;

    const totalCost = props.totalCost;
    const ingredients = props.ingredients;

    return (
        <div className={'OrderSummary'}>
            <p>Oh Yeah! You are ordering a Burger with the following items:</p>
            <ul>
                {
                    Object.keys(ingredients).map(
                        ingKey => {
                            return (
                                <li key={ingKey}>{ingKey}: {ingredients[ingKey]}</li>
                            );
                        }
                    )
                }
            </ul>
            <strong>Your Total Cost: {totalCost} TK</strong>
            <div className={'ButtonBlock'}>
                <Button type={'Danger'} clicked={cancelOrder}>CANCEL</Button>
                <Button type={'Success'} clicked={proceedOrder}>CONTINUE</Button>
            </div>
        </div>
    );
}

export default OrderSummary;