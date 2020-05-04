import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ingredients: null,
    ingredientPrices: {
        salad: 10,
        bacon: 20,
        cheese: 30,
        meat: 100
    },
    totalCost: 10,
    error: null
};

const burgerBuilder = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            newState = {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalCost: state.totalCost + state.ingredientPrices[action.ingredientName]
            };
            break;
        case actionTypes.REMOVE_INGREDIENT:
            newState = {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalCost: state.totalCost - state.ingredientPrices[action.ingredientName]
            };
            break;
        case actionTypes.FETCH_INGREDIENT:
            newState = {
                ...state,
                ingredients: {
                    ...action.ingredients
                }
            };
            break;
        case actionTypes.FETCH_INGREDIENT_FAILED:
            newState = {
                ...state,
                error: action.error
            };
            break;
        default:
            newState = state;
    }
    return newState;
};

export default burgerBuilder;