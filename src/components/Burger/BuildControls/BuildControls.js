import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label:'Salad', type:'salad'},
  {label:'Cheese', type:'cheese'},
  {label:'Meat', type:'meat'},
  {label:'Bacon', type:'bacon'}
];



const buildControls = props => (
        <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>

            {controls.map(ctrl=>(
                <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                add ={()=>props.addIngredient(ctrl.type)}
                remove={()=>props.removeIngredient(ctrl.type)}
                disabled= {props.disabled[ctrl.type]}
                />
            ))}
            <button className={classes.OrderButton} 
            disabled={!props.purchasable} 
            onClick={props.onPurchase}>ORDER NOW</button>
        </div>
);

export default buildControls;