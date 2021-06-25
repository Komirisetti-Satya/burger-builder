import React from 'react';

import Aux from '../../../hoc/Aux1'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igkey => {
        return (
            <li key={igkey}><span style={{ textTransform: 'capitalize' }}>{igkey}</span>:{props.ingredients[igkey]}</li>);
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
};

export default orderSummary;