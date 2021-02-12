import { combineReducers } from 'redux';
import productsByCategoryReducer from './productByCategory';
const rootReducer = combineReducers({
  productsByCategoryReducer: productsByCategoryReducer,
});

export type HomeState = ReturnType<typeof rootReducer>;

export default rootReducer;
