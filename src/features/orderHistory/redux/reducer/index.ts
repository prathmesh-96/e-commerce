import { combineReducers } from 'redux';
import orderHistoryReducer from './orderHistoryReducer';

const rootReducer = combineReducers({
  orderHistoryReducer: orderHistoryReducer,
});

export type OrderHistoryState = ReturnType<typeof rootReducer>;

export default rootReducer;
