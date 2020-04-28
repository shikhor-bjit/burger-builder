import React, {Component} from "react";
import Modal from "../../components/UI/Modal/Modal";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import IngredientController from "../../components/IngredientController/IngredientController";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            bacon: 0,
            salad: 0,
            cheese: 0,
            meat: 0
        },
        ingredientPrices: {
            bacon: 20,
            salad: 10,
            cheese: 30,
            meat: 100
        },
        totalCost: 10,
        isPlacedOrder: false
    }

    addIngredients = (type) => {
        const ingredients = {...this.state.ingredients};
        const ingredientPrices = {...this.state.ingredientPrices};
        ingredients[type] = ingredients[type] + 1;

        const cost = ingredientPrices[type];

        this.setState({ingredients: ingredients, totalCost: this.state.totalCost + cost});
    }

    removeIngredients = (type) => {
        const ingredients = {...this.state.ingredients};
        const ingredientPrices = {...this.state.ingredientPrices};
        if (ingredients[type] <= 0) return;

        ingredients[type] = ingredients[type] - 1;
        const cost = ingredientPrices[type];

        this.setState({ingredients: ingredients, totalCost: this.state.totalCost - cost});
    }

    placeOrder = () => {
        let totalAdded = 0;
        let isPlacedOrder = true;
        const ingredients = {...this.state.ingredients};
        Object.values(ingredients).forEach(ingCnt => totalAdded += ingCnt)
        if (totalAdded === 0) isPlacedOrder = false;

        this.setState({isPlacedOrder: isPlacedOrder});
    }

    cancelOrder = () => {
        this.setState({isPlacedOrder: false});
    }

    render() {
        return (
            <div className={'BurgerBuilder'}>
                <Burger ingredients={this.state.ingredients}/>
                <Modal show={this.state.isPlacedOrder} clicked={this.cancelOrder}>
                    <OrderSummary ingredients={this.state.ingredients} totalCost={this.state.totalCost}/>
                </Modal>
                <IngredientController ingredientPrices={this.state.ingredientPrices}
                                      addIngredients={this.addIngredients}
                                      removeIngredients={this.removeIngredients}
                                      totalCost={this.state.totalCost}
                                      placeOrder={this.placeOrder}/>
            </div>
        );
    }
}

export default BurgerBuilder;
