import { combineReducers } from 'redux';
import cartProductReducer from './cartProductsReducer';
import cartTotalReducer from './cartTotalReducer';
import cartDeleteProductReducer from './cartDeleteProductsReducer';
import updateQuantityReducer from './updateQuantityReducer';
import updateQuantityResponseReducer from './updateQuantityResponseReducer';
import updatecartProductReducer from './updatecartProductsReducer';

const rootReducer = combineReducers({
  cartProductReducer: cartProductReducer,
  cartTotalReducer: cartTotalReducer,
  cartDeleteProductReducer: cartDeleteProductReducer,
  updateQuantityReducer: updateQuantityReducer,
  updateQuantityResponseReducer: updateQuantityResponseReducer,
  updatecartProductReducer: updatecartProductReducer,
});

export type CartProductsState = ReturnType<typeof rootReducer>;

export default rootReducer;
