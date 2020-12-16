const cartWithoutItem = (checkout, item) => checkout.filter(cartItem => cartItem.gsx$name.$t !== item.gsx$name.$t)
const itemInCart = (checkout, item) => checkout.filter(cartItem => cartItem.gsx$name.$t === item.gsx$name.$t)[0]

const addToCart = (checkout, item) => {
  const cartItem = itemInCart(checkout, item)
  const price = (parseInt(item.gsx$priceincents.$t)/100)
    return cartItem === undefined
      ? [ ...cartWithoutItem(checkout, item), { ...item, quantity: 1, total: price }]
      : [ ...cartWithoutItem(checkout, item), {...cartItem, quantity: cartItem.quantity + 1, total: cartItem.total += price}]
}

const removeFromCart = (checkout, item) => {
  const cartItem = itemInCart(checkout, item)
  const price = (parseInt(item.gsx$priceincents.$t)/100)
  return item.quantity === 1
    ? [ ...cartWithoutItem(checkout, item) ]
    : [ ...cartWithoutItem(checkout, item), { ...item, quantity: item.quantity - 1, total: cartItem.total -= price}]
}

const removeAllFromCart = (checkout, item) => {
  return [ ...cartWithoutItem(checkout, item) ]

}

const shopReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD':
      return addToCart(state, action.payload)

    case 'REMOVE':
      return removeFromCart(state, action.payload)

    case 'REMOVE_ALL':
        return removeAllFromCart(state, action.payload)

    default:
      return state
  }
}

export default shopReducer;