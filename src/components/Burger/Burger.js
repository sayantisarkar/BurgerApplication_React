import React from 'react';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import classes from '../Burger/Burger.module.css';

const burger = (props)=>{

   const transformedIngredients = Object.keys(props.ingredients)
    .map(igkey=> {
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
            return <BurgerIngredient key={igkey + i} type={igkey} />
        });
    });
    return(
    <div className={classes.Burger}>
    <BurgerIngredient type='bread-top'/>
    {/* <BurgerIngredient type='cheese'/>
    <BurgerIngredient type='meat'/> */}
    {transformedIngredients}
    <BurgerIngredient type='bread-bottom'/>
    </div>  
    );
}

export default burger;