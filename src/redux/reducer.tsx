import { combineReducers } from 'redux';
import productReducer from '../features/home/redux/reducer';
import productsByCategoryReducer from '../features/category/redux/reducer';
import productSearchReducer from '../features/productSearch/redux/reducer';
import productDetailReducer from '../features/productDetail/redux/reducer';
import reviewReducer from '../features/productReviewDetails/redux/reducer';
import selectAddressReducer from '../features/selectAddress/redux/reducer';
import shippingAddressReducer from '../features/addNewAddress/redux/reducer';
import orderHistoryReducer from '../features/orderHistory/redux/reducer';
import cartProductsReducer from '../features/cart/redux/reducer';
import createCustomerReducer from '../features/register/redux/reducer';

const rootReducer = combineReducers({
  home: productReducer,
  category: productsByCategoryReducer,
  productSearch: productSearchReducer,
  productDetail: productDetailReducer,
  productReviewDetails: reviewReducer,
  selectAddress: selectAddressReducer,
  shippingAddress: shippingAddressReducer,
  orderHistory: orderHistoryReducer,
  cartProducts: cartProductsReducer,
  createCustomer: createCustomerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
