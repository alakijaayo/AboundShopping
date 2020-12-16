import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './Header.style';

function Header() {
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
                    Checkout
                  </Button>
              </Toolbar>
          </AppBar>
        </div>
    )
}

export default Header;