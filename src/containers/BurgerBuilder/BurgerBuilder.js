import './BurgerBuilder.css';
import axios from "../../axios-order";
import React, {Component} from "react";
import Modal from "../../components/UI/Modal/Modal";
import Burger from "../../components/Burger/Burger";
import Spinner from "../../components/UI/Spinner/Spinner";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import IngredientController from "../../components/IngredientController/IngredientController";
import * as actionTypes from '../../store/actions/actions';
import {connect} from 'react-redux';

class BurgerBuilder extends Component {
    state = {
        isPlacedOrder: false,
        loading: false,
        message: null
    }

    placeOrder = () => {
        let totalAdded = 0;
        let isPlacedOrder = true;
        const ingredients = {...this.props.ingredients};
        Object.values(ingredients).forEach(ingCnt => totalAdded += ingCnt)
        if (totalAdded === 0) isPlacedOrder = false;

        this.setState({isPlacedOrder: isPlacedOrder});
    }

    cancelOrder = () => {
        this.setState({isPlacedOrder: false, message: null});
    }

    proceedOrder = () => {
        this.setState({loading: true});
        axios.post('/orders.json', this.props.ingredients)
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
        Object.keys(this.props.ingredients).forEach(
            ingKey => {
                if (this.props.ingredients[ingKey] > 0) isPlaceAble = false;
            }
        )
        return isPlaceAble;
    }

    render() {
        let orderSummary = (
            <OrderSummary
                ingredients={this.props.ingredients}
                totalCost={this.props.totalCost}
                clicked={this.cancelOrder}
                proceedOrder={this.proceedOrder}/>
        );
        if (this.state.loading) orderSummary = <Spinner/>;
        if (this.state.message) orderSummary = this.state.message;

        return (
            <div className={'BurgerBuilder'}>
                <Burger ingredients={this.props.ingredients}/>
                <Modal show={this.state.isPlacedOrder} clicked={this.cancelOrder}>
                    {orderSummary}
                </Modal>
                <IngredientController ingredientPrices={this.props.ingredientPrices}
                                      addIngredients={this.props.onIngredientAdd}
                                      removeIngredients={this.props.onIngredientRemove}
                                      totalCost={this.props.totalCost}
                                      placeOrder={this.placeOrder}
                                      ingredients={this.props.ingredients}
                                      isOrderPlaceAble={this.isOrderPlaceAble()}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        ingredientPrices: state.ingredientPrices,
        totalCost: state.totalCost
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdd: (ingredientName) => dispatch({
            type: actionTypes.ADD_INGREDIENT,
            ingredientName: ingredientName
        }),
        onIngredientRemove: (ingredientName) => dispatch({
            type: actionTypes.REMOVE_INGREDIENT,
            ingredientName: ingredientName
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
