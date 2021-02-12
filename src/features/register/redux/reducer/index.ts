import { combineReducers } from 'redux';
import createCustomerReducer from './createCustomerReducer';
import createCustomerResponseReducer from './createCustomerResponseReducer';

const rootReducer = combineReducers({
  createCustomerReducer: createCustomerReducer,
  createCustomerResponseReducer: createCustomerResponseReducer,
});

export type CreateCustomerState = ReturnType<typeof rootReducer>;

export default rootReducer;
