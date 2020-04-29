import React from 'react';
import './SingleController.css'
import PropTypes from 'prop-types';

const SingleController = props => {
    const addIngredients = props.addIngredients;
    const ingredientCount = props.ingredientCount;
    const removeIngredients = props.removeIngredients;

    return (
        <div className={'SingleController'}>
            <span className={'Label'}>{props.name}</span>
            <button
                className={'Less'}
                disabled={ingredientCount === 0}
                onClick={() => removeIngredients(props.name)}>Less
            </button>
            <button onClick={() => addIngredients(props.name)} className={'More'}>More</button>
            ({!props.price ? 0 : props.price} tk / item)
        </div>
    );
}

SingleController.propTypes = {
    name: PropTypes.string.isRequired,
    ingredientCount: PropTypes.number.isRequired
};

export default SingleController;