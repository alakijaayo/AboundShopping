import { createStore, combineReducers } from 'redux'
import shopReducer from './Reducers/shopReducers';

const rootReducer = combineReducers({
  checkout: shopReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;