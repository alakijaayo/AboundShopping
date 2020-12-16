import React from 'react';
import { Button } from '@material-ui/core';

function AddButton(props) {
    if (props.available === "in stock") {
        return <Button onClick={() => props.addToCart(props.product)} variant="contained" color="secondary">Add to Cart</Button>;
    }
    return <Button variant="contained" color="secondary" disabled>Add to Cart</Button>;
}

export default AddButton;


