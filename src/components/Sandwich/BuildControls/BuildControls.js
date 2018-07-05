import React from 'react';
import classes from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

//create my jsk of the build controls

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Price <strong>${props.totalPrice.toFixed(2)}</strong></p>
            {controls.map(control => (
                <BuildControl
                    key={control.label}
                    label={control.label}
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemoved(control.type)}
                    disabled={props.disabled[control.label]}
                />
            ))}
            <button
                className={classes.OrderButton}
                disabled={props.canBePurchased}
                onClick={props.purchaseButtonHandler}
            >BUY THIS</button>
        </div>
    );
};


export default buildControls;