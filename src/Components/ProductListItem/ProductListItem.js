import React from 'react';
import useStyles from './ProductListItem.style';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AddButton from '../AddButton/addButton';
import Typography from '@material-ui/core/Typography';
import RemoveButton from '../RemoveButton/removeButton';

function ProductListItem(props) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5"><b>{props.product.gsx$name.$t}</b></Typography>
        <Typography variant= "subtitle2" className={classes.description}><b>Description:</b> {props.product.gsx$description.$t}</Typography>
        <Typography variant= "subtitle2" className={classes.price}><b>Price:</b> ${(props.product.gsx$priceincents.$t/100).toFixed(2)}</Typography>
        <Typography variant= "subtitle2" className={classes.status}><b>Status:</b> {props.product.gsx$availability.$t.replace(/[_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</Typography>
        <CardActions className= {classes.button}>
          <AddButton 
            available={props.product.gsx$availability.$t.replace(/[_]/g, ' ')} 
            product={props.product}
            addToCart={props.addToCart}
          />
            {
              props.cartItem
              ? <RemoveButton
                  cartItem={props.cartItem}
                  product={props.product}
                  removeFromCart={props.removeFromCart}
                />
              :
                null
              }
            </CardActions>
        </CardContent>
    </Card>
  )
}

export default ProductListItem