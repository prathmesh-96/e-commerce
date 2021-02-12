import { all, put, takeEvery, call, select, retry } from 'redux-saga/effects';
import * as productDetailActions from './actions/productsDetail';
import * as addToCartActions from './actions/addToCart';
import * as cartBadgeActionsCreators from '../../home/redux/actionCreators/cartBadge';
import * as productDetailActionsCreators from './actionCreators/productsDetail';
import * as addToCartActionsCreators from './actionCreators/addToCart';
import * as quantityActions from './actions/quantity';
import { postAddToCart } from '../../../services/cartProducts';
import { getSimilarProducts, getReview } from '../../../services/similarProduct';
import { getProducts } from '../../../services/products';
import Product, { Reviews, similarOptionProduct } from '../../../types/Product';
import { AppState } from '../../../redux/reducer';
import { WOOCOMMERCE_PARAMS } from '../../../constants';
import { AnyAction } from 'redux';
import { Alert, View } from 'react-native';

export const productDetailPageProducts = (state: AppState) =>
  state.productDetail.productsReducer.similarProduct;
export const productDetailPageProductsListOver = (state: AppState) =>
  state.productDetail.productsReducer.productsOver;

export function* GET_PRODUCTS_DETAIL({ productId, related_id }: AnyAction) {
  const products = yield select(productDetailPageProducts);
  const productsOver = yield select(productDetailPageProductsListOver); // flag that indicates if lazy load list is over or not
  // RootNavigation.navigate('Product', { userName: 'Lucy' })
  // get products only if productsOver flag is false
  yield put(productDetailActionsCreators.clearPopularProducts());
  if (!productsOver) {
    const res: Product[] = yield call(getProducts, products);
    if (res) {
      yield put(productDetailActionsCreators.setPopularProductsOver());
    }
    yield put(productDetailActionsCreators.setPopularProducts(res, products));
    const similarProduct: similarOptionProduct[] = yield call(getSimilarProducts, related_id);
    const reviews: Reviews[] = yield call(getReview, productId);
    yield put(productDetailActionsCreators.setReview(reviews));
    yield put(productDetailActionsCreators.setSimilarProducts(similarProduct));
  }
}

export function* POST_ADD_TO_CART({ addToCartProducts }: AnyAction) {
  const res = yield call(postAddToCart, addToCartProducts);
  if (res !== null) {
    console.log('res', res);
    yield put(addToCartActionsCreators.getAddToCartResponse(true));
    yield put(cartBadgeActionsCreators.getCartItemCount());
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

export function* SET_QUANTITY_COUNT({ quantity_count }: AnyAction) {
  console.log('saga quantity count=', quantity_count);
  // yield put(quantityActionsCreators.setQuantityCount(quantity_count))
}

export default function* rootSaga() {
  yield all([takeEvery(productDetailActions.GET_PRODUCTS_DETAIL, GET_PRODUCTS_DETAIL)]);
  yield all([takeEvery(addToCartActions.POST_ADD_TO_CART, POST_ADD_TO_CART)]);
  yield all([takeEvery(quantityActions.SET_QUANTITY_COUNT, SET_QUANTITY_COUNT)]);
}
