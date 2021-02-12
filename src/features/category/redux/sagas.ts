import { all, put, takeEvery, call, select, delay } from 'redux-saga/effects';
import * as categoryActions from './actions/productByCategory';
import * as categoryActionsCreators from './actionCreators/productByCategory';
import { getProductsByCategory } from '../../../services/products';
import Product from '../../../types/Product';
import { AppState } from '../../../redux/reducer';
import { WOOCOMMERCE_PARAMS } from '../../../constants';
import { AnyAction } from 'redux';

export const categoryPageProducts = (state: AppState) =>
  state.category.productsByCategoryReducer.products;
export const categoryPageProductsListOver = (state: AppState) =>
  state.category.productsByCategoryReducer.productsOver;
export const categoryProductsOffset = (state: AppState) =>
  state.category.productsByCategoryReducer.offset;

export function* GET_PRODUCTSBYCATEGORY({ categoryId, lazyLoad }: AnyAction) {
  const productsByCategoryOver = yield select(categoryPageProductsListOver); // flag that indicates if lazy load list is over or not
  // get products only if productsOver flag is false
  if (!lazyLoad) {
    yield put(categoryActionsCreators.setLoading());
  }

  if (!lazyLoad || !productsByCategoryOver) {
    const offset = yield select(categoryProductsOffset);
    const res: Product[] = yield call(getProductsByCategory, offset.length, categoryId);
    console.log(res);
    if (res.length < WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS) {
      // for (let i = 0; i < 5; i++) {
      //   try {
      //     const apiResponse = yield call(getProductsByCategoryAll, offset.length);
      //     return apiResponse;
      //   } catch (err) {
      //     if (i < 4) {
      //       yield delay(2000);
      //     }
      //   }
      // }
      yield put(categoryActionsCreators.setProductsByCategoryOver());
    }
    yield put(categoryActionsCreators.setPopularProducts(res, offset.length));
  }
}
export default function* rootSaga() {
  yield all([takeEvery(categoryActions.GET_PRODUCTSBYCATEGORY, GET_PRODUCTSBYCATEGORY)]);
}
