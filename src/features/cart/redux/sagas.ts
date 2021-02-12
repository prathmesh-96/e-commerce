import { all, put, takeEvery, call, select } from 'redux-saga/effects';
import * as cartProductsActions from './actions/cartProducts';
import * as cartProductsActionsCreators from './actionCreator/cartProducts';
import * as updatecartProductsActions from './actions/updatecartProducts';
import * as updatecartProductsActionsCreators from './actionCreator/updatecartProducts';
import * as cartTotalActions from './actions/cartTotal';
import * as updateQuantityActions from './actions/updateQuantity';
import * as updateQuantityActionsCreator from './actionCreator/updateQuantity';
import * as cartTotalActionsCreators from './actionCreator/cartTotal';
import * as cartDeleteProductActions from './actions/cartDeleteProduct';
import * as cartDeleteProductActionsCreators from './actionCreator/cartDeleteProduct';
import * as cartBadgeActionsCreators from '../../home/redux/actionCreators/cartBadge';
import {
  getCartProducts,
  getCartTotal,
  deleteCartProduct,
  updateQuantity,
} from '../../../services/cartProducts';
import CartProduct from '../../../types/CartProduct';
import CartTotal from '../../../types/CartTotal';
import { AppState } from '../../../redux/reducer';
import { AnyAction } from 'redux';
import { WOOCOMMERCE_PARAMS } from '../../../constants';
import { Alert } from 'react-native';
import { navigate } from '../../../navigator/NavigationService';
import { ScreenNames } from '../../../constants';

export const orderProduct = (state: AppState) =>
  state.cartProducts.cartProductReducer.orderProducts;
export const cartProductsOver = (state: AppState) =>
  state.cartProducts.cartProductReducer.cartProductsOver;

export function* GET_CART_PRODUCTS({ lazyLoad }: AnyAction) {
  const orderProducts = yield select(orderProduct);
  const cartProductsListOver = yield select(cartProductsOver); // flag that indicates if lazy load list is over or not
  // get products only if productsOver flag is false
  if (!lazyLoad) {
    yield put(cartProductsActionsCreators.setLoading());
  }

  if (!lazyLoad || !cartProductsListOver) {
    const res = yield call(getCartProducts, orderProducts.length);
    let cartProductsList: CartProduct[] = new Array(res.length);
    console.log('results:' + cartProductsList);
    var i = 0;
    Object.keys(res).forEach(function (key) {
      cartProductsList[i] = res[key];
      i++;
    });
    if (res.length < WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS) {
      yield put(cartProductsActionsCreators.setCartProductsOver());
    }
    yield put(cartProductsActionsCreators.setCartProducts(cartProductsList, orderProducts.length));
  }
}

export function* GET_CART_TOTAL() {
  const res: CartTotal = yield call(getCartTotal);
  yield put(cartTotalActionsCreators.setCartTotal(res));
}

export function* DELETE_CART_PRODUCT({ key }: AnyAction) {
  const res: string = yield call(deleteCartProduct, key);
  yield put(cartDeleteProductActionsCreators.setCartDeleteProducts(res));
  if (res === 'Item has been removed from cart.') {
    yield put(cartProductsActionsCreators.getCartProducts(false));
    yield put(cartTotalActionsCreators.getCartTotal());
    yield put(cartBadgeActionsCreators.getCartItemCount());
  }
}

export function* UPDATE_QUANTITY({ updateCartProduct }: AnyAction) {
  const res = yield call(updateQuantity, updateCartProduct);
  if (res !== null) {
    if (res.quantity === updateCartProduct.quantity) {
      yield put(cartBadgeActionsCreators.getCartItemCount());
      yield put(updateQuantityActionsCreator.updateQuantityResponseAction(true));
      yield put(cartTotalActionsCreators.getCartTotal());
      yield put(updatecartProductsActionsCreators.getupdateCartProducts(false));
      navigate(ScreenNames.CartScreen);
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

export const updateorderProduct = (state: AppState) =>
  state.cartProducts.updatecartProductReducer.orderProducts;
export const updatecartProductsOver = (state: AppState) =>
  state.cartProducts.updatecartProductReducer.cartProductsOver;

export function* GET_CART_UPDATE_PRODUCTS({ lazyLoad }: AnyAction) {
  const orderProducts = yield select(updateorderProduct);
  const cartProductsListOver = yield select(updatecartProductsOver); // flag that indicates if lazy load list is over or not
  // get products only if productsOver flag is false

  if (!lazyLoad || !cartProductsListOver) {
    const res = yield call(getCartProducts, orderProducts.length);
    console.log('update cart products =', res);
    let cartProductsList: CartProduct[] = new Array(res.length);
    var i = 0;
    Object.keys(res).forEach(function (key) {
      cartProductsList[i] = res[key];
      i++;
    });
    if (res.length < WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS) {
      yield put(updatecartProductsActionsCreators.setupdateCartProductsOver());
    }
    yield put(
      updatecartProductsActionsCreators.setupdateCartProducts(
        cartProductsList,
        orderProducts.length,
      ),
    );
  }
}

export default function* rootSaga() {
  yield all([takeEvery(cartProductsActions.GET_ORDERED_PRODUCTS, GET_CART_PRODUCTS)]);
  yield all([takeEvery(cartTotalActions.GET_TOTAL, GET_CART_TOTAL)]);
  yield all([takeEvery(cartDeleteProductActions.DELETE_PRODUCTS, DELETE_CART_PRODUCT)]);
  yield all([takeEvery(updateQuantityActions.UPDATE_QUANTITY, UPDATE_QUANTITY)]);
  yield all([
    takeEvery(updatecartProductsActions.GET_UPDATE_ORDERED_PRODUCTS, GET_CART_UPDATE_PRODUCTS),
  ]);
}
