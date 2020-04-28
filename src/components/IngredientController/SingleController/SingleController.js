import React from 'react';
import './SingleController.css'
import PropTypes from 'prop-types';

const SingleController = props => {
    const addIngredients = props.addIngredients;
    const removeIngredients = props.removeIngredients;

    return (
        <div className={'SingleController'}>
            <span className={'Label'}>{props.name}</span>
            <button onClick={() => removeIngredients(props.name)} className={'Less'}>Less</button>
            <button onClick={() => addIngredients(props.name)} className={'More'}>More</button>
            ({!props.price ? 0 : props.price} tk / item)
        </div>
    );
}

SingleController.propTypes = {
    name: PropTypes.string.isRequired
};

export default SingleController;