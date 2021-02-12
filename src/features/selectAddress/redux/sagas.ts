import { all, put, takeEvery, call } from 'redux-saga/effects';
import * as customerInfoActions from './actions/selectAddresses';
import * as customerInfoActionsCreators from './actionCreators/selectAddresses';
import * as paymentActions from './actions/payment';
import * as paymentActionsCreators from './actionCreators/payment';
import * as cartProductsActionsCreators from '../../cart/redux/actionCreator/cartProducts';
import * as cartTotalActionsCreators from '../../cart/redux/actionCreator/cartTotal';
import { getCustomerInformation } from '../../../services/products';
import { clearCart } from '../../../services/cartProducts';
import CustomerInfo from '../../../types/CustomerInfo';
import { AppState } from '../../../redux/reducer';
import { AnyAction } from 'redux';
import { postOrders } from '../../../services/placeOrder';
import { Alert } from 'react-native';
import { navigate } from '../../../navigator/NavigationService';
import { ScreenNames } from '../../../constants';
import OrderHistory from '../../../types/OrderHistory';

export const customerInfo = (state: AppState) =>
  state.selectAddress.selectAddressReducer.customerDetails;

export function* GET_CUSTOMER_DETAILS({ customerId }: AnyAction) {
  const res: CustomerInfo = yield call(getCustomerInformation, 0, customerId);
  yield put(customerInfoActionsCreators.setCustomerInformation(res, 1));
}

export function* CLEAR_CART_PRODUCTS() {
  const res = yield call(clearCart);
  console.log('cart response =', res);
  yield put(cartProductsActionsCreators.getCartProducts(false));
  yield put(cartTotalActionsCreators.getCartTotal());
  // navigate(ScreenNames.CartScreen)
}

export function* POST_ORDERS({ placeorder, screenName }: AnyAction) {
  const res: OrderHistory = yield call(postOrders, placeorder);
  if (res !== null) {
    if (screenName === 'Cart') {
      console.log('name ==', screenName);
      yield put(paymentActionsCreators.clearCart());
      navigate(ScreenNames.OrderConfirmationScreen, { data: res });
    }
    if (screenName === 'BuyNow') {
      navigate(ScreenNames.OrderConfirmationScreen, { data: res });
    }
  } else {
    Alert.alert(
      'Alert',
      'Sorry! Try after sometime',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK' },
      ],
      { cancelable: false },
    );
  }
}
export default function* rootSaga() {
  yield all([takeEvery(customerInfoActions.GET_CUSTOMER_INFO, GET_CUSTOMER_DETAILS)]);
  yield all([takeEvery(paymentActions.POST_ORDER, POST_ORDERS)]);
  yield all([takeEvery(paymentActions.CLEAR_CART, CLEAR_CART_PRODUCTS)]);
}
