import { all, put, takeEvery, call, select } from 'redux-saga/effects';
import * as productSearchActions from './actions/products';
import * as productSearchActionsCreators from './actionCreators/products';
import { getSearchProducts } from '../../../services/products';
import Product from '../../../types/Product';
import { navigate } from '../../../navigator/NavigationService';
import { AppState } from '../../../redux/reducer';
import { WOOCOMMERCE_PARAMS, ScreenNames } from '../../../constants';
import { AnyAction } from 'redux';

export const searchProductsOffset = (state: AppState) =>
  state.productSearch.productSearchReducer.offset;
export const searchProductsListOver = (state: AppState) =>
  state.productSearch.productSearchReducer.productsOver;

export function* GET_SEARCH_PRODUCTS({ searchText, lazyLoad }: AnyAction) {
  const searchProductsOver = yield select(searchProductsListOver); // flag that indicates if lazy load list is over or not

  if (!lazyLoad) {
    yield put(productSearchActionsCreators.setLoading());
  }
  // get products only if productsOver flag is false
  if (!lazyLoad || !searchProductsOver) {
    console.log(searchText + ' in saga');
    const offset = yield select(searchProductsOffset);
    const res: Product[] = yield call(getSearchProducts, offset, searchText);
    if (res.length < WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS) {
      yield put(productSearchActionsCreators.setSearchProductsOver());
    }
    yield put(productSearchActionsCreators.setSearchProducts(res, res.length));
    if (!lazyLoad) {
      navigate(ScreenNames.ProductSearch, { searchText: searchText });
    }
  }
  console.log(`searching for - ${searchText}`);
  yield put(productSearchActionsCreators.setSearchQuery(searchText));
}

export default function* rootSaga() {
  yield all([takeEvery(productSearchActions.GET_SEARCH_PRODUCTS, GET_SEARCH_PRODUCTS)]);
}
