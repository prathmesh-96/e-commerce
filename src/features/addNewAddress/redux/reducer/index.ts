import { combineReducers } from 'redux';
import shippingAddressReducer from './shippingAddressReducer';
import shippingAddressResponseReducer from './shippingAddressResponseReducer';

const rootReducer = combineReducers({
  shippingAddressReducer: shippingAddressReducer,
  shippingAddressResponseReducer: shippingAddressResponseReducer,
});

export type ShippingAddressState = ReturnType<typeof rootReducer>;

export default rootReducer;
