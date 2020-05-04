import './Burger.css';
import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
    console.log("ingredients: ", props.ingredients);
    let processedIngredients = Object.keys(props.ingredients).map(
        igKey => {
            return [...Array(props.ingredients[igKey])].map(
                (_, i) => {
                    return (
                        <BurgerIngredient type={igKey} key={igKey + i}/>
                    );
                }
            );
        }
    ).reduce(
        (arr, el) => {
            return arr.concat(el);
        }, []
    );
    // console.log(processedIngredients);
    if (processedIngredients.length === 0) processedIngredients = <p>please start adding ingredients</p>
    return (
        <div className="Burger">
            <BurgerIngredient type={'bread-top'}/>
            {processedIngredients}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
};

export default Burger;