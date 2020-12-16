import React from 'react';
import { Card , CardActions, CardContent, Typography } from '@material-ui/core';
import useStyles from './ProductListItem.style';
import AddButton from '../AddButton/addButton';

function ProductListItem(props) {
    const classes = useStyles();
    
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5"><b>{props.product.gsx$name.$t}</b></Typography>
          <Typography variant= "subtitle2" className={classes.description}><b>Description:</b> {props.product.gsx$description.$t}</Typography>
          <Typography variant= "subtitle2" className={classes.price}><b>Price:</b> ${(props.product.gsx$priceincents.$t/100).toFixed(2)}</Typography>
          <Typography variant= "subtitle2" className={classes.status}><b>Status:</b> {props.product.gsx$availability.$t.replace(/[_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</Typography>
          <CardActions className={classes.button}>
            <AddButton available={props.product.gsx$availability.$t.replace(/[_]/g, ' ')}  />
          </CardActions>
        </CardContent>
      </Card>
    )
}

export default ProductListItem