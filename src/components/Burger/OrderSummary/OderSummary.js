import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';


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
            <p>Do you wish to checkout?</p>
        </Aux>
    );

}

export default ordersummary;