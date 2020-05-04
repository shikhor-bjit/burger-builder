import './BurgerBuilder.css';
import axios from "../../axios-order";
import React, {Component} from "react";
import Modal from "../../components/UI/Modal/Modal";
import Burger from "../../components/Burger/Burger";
import Spinner from "../../components/UI/Spinner/Spinner";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import IngredientController from "../../components/IngredientController/IngredientController";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        ingredientPrices: {
            salad: 10,
            bacon: 20,
            cheese: 30,
            meat: 100
        },
        totalCost: 10,
        isPlacedOrder: false,
        loading: false,
        message: null
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
        this.setState({isPlacedOrder: false, message: null});
    }

    proceedOrder = () => {
        this.setState({loading: true});
        axios.post('/orders.json', this.state.ingredients)
            .then(response => {
                this.setState({
                    loading: false,
                    message: 'Order placed! We will reach you soon.'
                });
            })
            .catch(error => {
                this.setState({loading: false, message: error.message});
            });
    }

    isOrderPlaceAble = () => {
        let isPlaceAble = true;
        Object.keys(this.state.ingredients).forEach(
            ingKey => {
                if (this.state.ingredients[ingKey] > 0) isPlaceAble = false;
            }
        )
        return isPlaceAble;
    }

    render() {
        let orderSummary = (
            <OrderSummary
                ingredients={this.state.ingredients}
                totalCost={this.state.totalCost}
                clicked={this.cancelOrder}
                proceedOrder={this.proceedOrder}/>
        );
        if (this.state.loading) orderSummary = <Spinner/>;
        if (this.state.message) orderSummary = this.state.message;

        return (
            <div className={'BurgerBuilder'}>
                <Burger ingredients={this.state.ingredients}/>
                <Modal show={this.state.isPlacedOrder} clicked={this.cancelOrder}>
                    {orderSummary}
                </Modal>
                <IngredientController ingredientPrices={this.state.ingredientPrices}
                                      addIngredients={this.addIngredients}
                                      removeIngredients={this.removeIngredients}
                                      totalCost={this.state.totalCost}
                                      placeOrder={this.placeOrder}
                                      ingredients={this.state.ingredients}
                                      isOrderPlaceAble={this.isOrderPlaceAble()}
                />
            </div>
        );
    }
}

export default BurgerBuilder;
