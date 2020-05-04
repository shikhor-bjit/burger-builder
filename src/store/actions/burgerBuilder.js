import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
}

const createFetchIngredientAction = (response) => {
    return {
        type: actionTypes.FETCH_INGREDIENT,
        ingredients: response.data
    };
}

const createFetchIngredientFailedAction = (error) => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FAILED,
        error: error.message
    };
}

export const fetchIngredient = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(response => {
                dispatch(createFetchIngredientAction(response));
            })
            .catch(error => {
                dispatch(createFetchIngredientFailedAction(error));
            });
    };
}