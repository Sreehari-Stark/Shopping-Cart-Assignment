import { combineReducers } from 'redux';

import cartReducer from './cart';
import productReducer from './products';

const rootReducer = combineReducers({
  cartItems: cartReducer,
  products: productReducer,
});

export default rootReducer;
