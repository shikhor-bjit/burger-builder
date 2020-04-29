import React from 'react';
import Aux from "../hoc/Aux";
import './IngredientController.css';
import SingleController from "./SingleController/SingleController";

const IngredientController = props => {
    const totalCost = props.totalCost;
    const placeOrder = props.placeOrder;
    const ingredients = props.ingredients;
    const addIngredients = props.addIngredients;
    const ingredientPrices = props.ingredientPrices;
    const isOrderPlaceAble = props.isOrderPlaceAble;
    const removeIngredients = props.removeIngredients;

    return (
        <Aux>
            <p>Total Cost: <strong>{totalCost} TK.</strong></p>
            <div className={'IngredientController'}>
                {
                    Object.keys(props.ingredientPrices)
                        .map(
                            (ingKey, i) => {
                                return (
                                    <SingleController
                                        key={ingKey + i}
                                        name={ingKey}
                                        addIngredients={addIngredients}
                                        removeIngredients={removeIngredients}
                                        ingredientCount={ingredients[ingKey]}
                                        price={ingredientPrices[ingKey]}/>
                                );
                            }
                        )
                }
                <button onClick={placeOrder} disabled={isOrderPlaceAble}>Place Order</button>
            </div>
        </Aux>
    );
};

IngredientController.propTypes = {};
IngredientController.defaultProps = {
    cost: 0
};

export default IngredientController;