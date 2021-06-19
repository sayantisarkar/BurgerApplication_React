import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Modal/Button/Button';


const ordersummary = (props) => {

    const summary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>
                    {igKey}: {props.ingredients[igKey]}
                </span>
            </li>
            )
        })

    return (
        <Aux>
            <h3>Your Order summary</h3>
            <p> A delicious burger wth the following ingredients !!! </p>
            <ul>
                {summary}
            </ul>
            <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
            <p>Do you wish to checkout?</p>
            <Button btnType="Danger" clicked = {props.purchaseCancelled}>CANCEL </Button>
            <Button btnType="Success" clicked = {props.purchaseContinued}>CONTINUE </Button>

        </Aux>
    );

}

export default ordersummary;