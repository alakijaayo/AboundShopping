import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Drawer, List, Card } from '@material-ui/core';
import useStyles from './Header.style';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';

function Header(props) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar postion="static">
        <Toolbar className={classes.toolbar}>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
          >
            Home
          </Typography>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
          >
            Abound Clothing
          </Typography>
          <Button
            onClick={() => setOpenDrawer(true)}
            color="secondary"
            variant="contained"
          >
            <ShoppingCartIcon />
            Checkout ({props.items.reduce((acc,item) => { return acc + item.quantity }, 0)})
            (${props.items.reduce((acc,item) => { return acc + item.total }, 0).toFixed(2)})
          </Button>
          <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
              <div className={classes.list}>
              <Typography variant="h4"><b>YOUR ORDER</b></Typography>
              <List>
                  {props.items.map((cart) => (
                      <Card>
                        <Typography variant="subtitle1">{cart.gsx$name.$t}</Typography>
                        <Typography variant="subtitle1">Quantity: {cart.quantity}</Typography>
                        <Button onClick={() => props.addToCart(cart)} size="small" variant="outlined"color="secondary">+</Button>
                        <Button onClick={() => props.removeFromCart(cart)}size="small" variant="outlined"color="secondary">-</Button>
                        <Button onClick={() => props.removeAllFromCart(cart)}size="small" variant="outlined"color="secondary">Remove From Cart</Button>
                      </Card>
                  ))}
              <Typography variant="h5">Total Price: ${props.items.reduce((acc,item) => { return acc + item.total }, 0).toFixed(2)}</Typography>    
              </List> 
              </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const MapStateToProps = (state) => {
    return {
      checkout: state.checkout
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (item) => {
        dispatch({ type: 'ADD', payload: item })
      },
      removeFromCart: (item) => {
        dispatch({ type: 'REMOVE', payload: item })
      },
      removeAllFromCart: (item) => {
        dispatch({ type: 'REMOVE_ALL', payload: item })
      }
    }
  }

  export default connect (MapStateToProps, mapDispatchToProps) (Header);