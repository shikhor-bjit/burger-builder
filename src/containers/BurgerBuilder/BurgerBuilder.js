import './BurgerBuilder.css';
import axios from "../../axios-order";
import React, {Component} from "react";
import Modal from "../../components/UI/Modal/Modal";
import Burger from "../../components/Burger/Burger";
import Spinner from "../../components/UI/Spinner/Spinner";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import IngredientController from "../../components/IngredientController/IngredientController";
import {connect} from 'react-redux';
import * as actionCreator from '../../store/actions';
import Aux from "../../components/hoc/Aux";

class BurgerBuilder extends Component {
    state = {
        loading: false,
        message: null,
        isPlacedOrder: false
    }

    componentDidMount() {
        this.props.onIngredientFetch();
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
        axios.post(`/orders.json?auth=${localStorage.getItem('token')}`, this.props.ingredients)
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
        let orderSummary, body;
        let showModal = false;

        if (this.props.error) {
            showModal = true;
            orderSummary = this.props.error;
        } else if (this.props.ingredients) {
            orderSummary = (
                <OrderSummary
                    ingredients={this.props.ingredients}
                    totalCost={this.props.totalCost}
                    clicked={this.cancelOrder}
                    proceedOrder={this.proceedOrder}/>
            );
            if (this.state.loading) orderSummary = <Spinner/>;
            if (this.state.message) orderSummary = this.state.message;

            body = (
                <Aux>
                    <Burger ingredients={this.props.ingredients}/>
                    <IngredientController ingredientPrices={this.props.ingredientPrices}
                                          addIngredients={this.props.onIngredientAdd}
                                          removeIngredients={this.props.onIngredientRemove}
                                          totalCost={this.props.totalCost}
                                          placeOrder={this.placeOrder}
                                          ingredients={this.props.ingredients}
                                          isOrderPlaceAble={this.isOrderPlaceAble()}
                    />
                </Aux>
            );
        } else body = <Spinner>Loading....</Spinner>;

        if (this.state.isPlacedOrder) showModal = true;
        return (
            <div className={'BurgerBuilder'}>
                <Modal show={showModal} clicked={this.cancelOrder}>
                    {orderSummary}
                </Modal>
                {body}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.builder.ingredients,
        ingredientPrices: state.builder.ingredientPrices,
        totalCost: state.builder.totalCost,
        error: state.builder.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdd: (ingredientName) => dispatch(actionCreator.addIngredient(ingredientName)),
        onIngredientRemove: (ingredientName) => dispatch(actionCreator.removeIngredient(ingredientName)),
        onIngredientFetch: () => dispatch(actionCreator.fetchIngredient())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
