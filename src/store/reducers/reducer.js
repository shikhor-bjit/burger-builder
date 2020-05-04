import * as actionTypes from '../actions/actions'

const initialState = {
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
    totalCost: 10
};

const reducer = (state = initialState, action) => {
    // console.log(action.type, action.ingredientName);
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
        default:
            newState = {...state};
    }
    // console.log('newState: ', newState);
    return newState;
};

export default reducer;