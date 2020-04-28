import React from 'react';

const OrderSummary = (props) => {
    const totalCost = props.totalCost;
    const ingredients = props.ingredients;

    return (
        <div className={'OrderSummary'}>
            <p>Oh Yeah! You are ordering a Burger with the following items:</p>
            <ol>
                {
                    Object.keys(ingredients).map(
                        ingKey => {
                            return (
                                <li key={ingKey}>{ingKey}: {ingredients[ingKey]}</li>
                            );
                        }
                    )
                }
            </ol>
            <strong>Your Total Cost: {totalCost} TK</strong>
        </div>
    );
}

export default OrderSummary;