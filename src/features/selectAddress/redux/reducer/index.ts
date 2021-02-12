import { combineReducers } from 'redux';
import selectAddressReducer from './selectAddressReducer';
import paymentReducer from './paymentReducer';
import cartResponseReducer from './cartResponseReducer';

const rootReducer = combineReducers({
  selectAddressReducer: selectAddressReducer,
  paymentReducer: paymentReducer,
  cartResponseReducer: cartResponseReducer,
});

export type SelectAddressState = ReturnType<typeof rootReducer>;

export default rootReducer;
