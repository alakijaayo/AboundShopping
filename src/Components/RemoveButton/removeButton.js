import React from 'react';
import { Button } from '@material-ui/core';

function RemoveButton (props) {
    return (
        <Button onClick={() => props.removeFromCart(props.cartItem)} variant="contained" color="secondary">
            Remove From Cart
        </Button>
    )
}

export default RemoveButton;