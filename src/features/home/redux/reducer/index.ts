import { combineReducers } from 'redux';
import productsReducer from './products';
import featuredProductReducer from './featuredProductReducer';
import babyProductReducer from './babyProductReducer';
import categoryReducer from './categoryReducer';
import collectionsReducer from './collectionsReducer';
import cartBadgeReducer from './cartBadgeReducer';
import categoryFirstReducer from './productByCategoryFrist';
import categorySecondReducer from './productByCategorySecond';

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  featuredProductReducer: featuredProductReducer,
  babyProductReducer: babyProductReducer,
  categoryReducer: categoryReducer,
  collectionsReducer: collectionsReducer,
  cartBadgeReducer: cartBadgeReducer,
  categoryFirstReducer: categoryFirstReducer,
  categorySecondReducer: categorySecondReducer,
});

export type HomeState = ReturnType<typeof rootReducer>;

export default rootReducer;
