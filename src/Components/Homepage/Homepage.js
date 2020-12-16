import React, { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';
import Header from '../Header/Header';
import { LinearProgress } from '@material-ui/core';
import { connect } from 'react-redux';

function Homepage(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://spreadsheets.google.com/feeds/list/1Cp0owZ_71huZOBLiX57hKTvxKYEo4qZC1y_IAHV6rX4/od6/public/values?alt=json")
          .then(response => response.json())
          .then(items => setData(items.feed.entry))
        }, [],
    );

    if (data === null) {
        return (
            <LinearProgress />
        );
    }

    return (
        <div>
            <Header items={props.checkout} product={data}/>
            <h3>Welcome to <b>ABOUND CLOTHING!</b> Enjoy your shopping!</h3>
            <ListItem product={data} />
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
      }
    }
  }

  export default connect (MapStateToProps, mapDispatchToProps) (Homepage); 