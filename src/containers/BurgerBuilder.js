import React, {Component} from 'react';
import Aux from '../hoc/Auxillary/Auxillary';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad:1,
    meat:3,
    bacon:2,
    cheese:1.5
};

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad:0,
            cheese:0,
            meat:0,
            bacon:0
        },
        totalPrice:4
    }

    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState ({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }

    deleteIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceDeduction;
        this.setState ({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });

    }


    render(){
        const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key]<= 0;
        }
       
        return (
           <Aux>
               <Burger ingredients={this.state.ingredients}/>
               <BuildControls 
               addIngredient={this.addIngredientHandler} 
               removeIngredient= {this.deleteIngredientHandler}
               disabled={disabledInfo}
               />      
            </Aux>
        );
    }
}

export default BurgerBuilder;