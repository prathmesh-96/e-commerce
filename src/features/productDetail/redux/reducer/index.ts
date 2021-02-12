import { combineReducers } from 'redux';
import productsReducer from './productsDetail';
import addToCartReducer from './addToCartReducer';
import quantityCountReducer from './quantityCountReducer';
import addToCartResponseReducer from './addToCartResponseReducer';

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  addToCartReducer: addToCartReducer,
  quantityCountReducer: quantityCountReducer,
  addToCartResponseReducer: addToCartResponseReducer,
});

export type HomeState = ReturnType<typeof rootReducer>;

export default rootReducer;
