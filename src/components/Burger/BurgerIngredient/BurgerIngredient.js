import React from "react";
import PropTypes from "prop-types";
import style from './BurgerIngredient.module.css';

const BurgerIngredient = (props) => {
    let ingredient;

    switch (props.type) {
        case 'bread-top':
            ingredient = (
                <div className={style.BreadTop}>
                    <div className={style.Seeds1}/>
                    <div className={style.Seeds2}/>
                </div>
            );
            break;
        case 'bread-bottom':
            ingredient = (<div className={style.BreadBottom}/>);
            break;
        case 'meat':
            ingredient = (<div className={style.Meat}/>);
            break;
        case 'cheese':
            ingredient = (<div className={style.Cheese}/>);
            break;
        case 'bacon':
            ingredient = (<div className={style.Bacon}/>);
            break;
        case 'salad':
            ingredient = (<div className={style.Salad}/>);
            break;
        default:
            ingredient = null;
    }
    return (ingredient);
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;