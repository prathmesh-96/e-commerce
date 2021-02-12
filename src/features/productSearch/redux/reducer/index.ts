import { combineReducers } from 'redux';
import productSearchReducer from './products';

const rootReducer = combineReducers({
  productSearchReducer: productSearchReducer,
});

export type SearchProductState = ReturnType<typeof rootReducer>;

export default rootReducer;
