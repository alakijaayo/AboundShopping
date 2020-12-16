import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './Header.style';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header(props) {
  const classes = useStyles();

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
            color="secondary"
            variant="contained"
          >
            <ShoppingCartIcon />
            Checkout ({props.items.reduce((acc,item) => { return acc + item.quantity }, 0)})
            (${props.items.reduce((acc,item) => { return acc + item.total }, 0).toFixed(2)})
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;