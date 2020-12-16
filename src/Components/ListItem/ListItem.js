import React from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import  { connect } from 'react-redux';

function ListItem(props)  {
    return (
        <div>
          {
            props.product.map(product => 
              <ProductListItem
                product={product}
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}
                cartItem={props.checkout.filter(cartItem => cartItem.gsx$name.$t === product.gsx$name.$t)[0]} 
              />
            )
          }
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

export default connect (MapStateToProps, mapDispatchToProps)(ListItem);