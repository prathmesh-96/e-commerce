import { all } from 'redux-saga/effects';
import home from '../features/home/redux/sagas';
import category from '../features/category/redux/sagas';
import productSearch from '../features/productSearch/redux/sagas';
import productDetail from '../features/productDetail/redux/sagas';
import productReviewDetails from '../features/productReviewDetails/redux/sagas';
import customerInfoDetails from '../features/selectAddress/redux/sagas';
import shippingAddress from '../features/addNewAddress/redux/sagas';
import orderHistory from '../features/orderHistory/redux/sagas';
import cartProducts from '../features/cart/redux/sagas';
import createCustomer from '../features/register/redux/sagas';

export default function* rootSaga() {
  yield all([
    home(),
    category(),
    productSearch(),
    productDetail(),
    productReviewDetails(),
    customerInfoDetails(),
    shippingAddress(),
    orderHistory(),
    cartProducts(),
    createCustomer(),
  ]);
}
