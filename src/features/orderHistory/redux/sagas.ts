import { all, put, takeEvery, call, select } from 'redux-saga/effects';
import * as orderHistoryActionsCreators from './actionCreator/orderHistory';
import * as orderHistoryActions from './actions/orderHistory';
import { getOrderHistory } from '../../../services/products';
import { AppState } from '../../../redux/reducer';
import { WOOCOMMERCE_PARAMS } from '../../../constants';
import OrderHistory from '../../../types/OrderHistory';
import { AnyAction } from 'redux';

export const orderHistories = (state: AppState) =>
  state.orderHistory.orderHistoryReducer.orderHistories;
export const orderHistoriesListOver = (state: AppState) =>
  state.orderHistory.orderHistoryReducer.orderHistoryOver;

export function* GET_ORDER_HISTORY({ customerId, lazyLoad }: AnyAction) {
  const orderHistory = yield select(orderHistories);
  const orderHistoryListOver = yield select(orderHistoriesListOver); // flag that indicates if lazy load list is over or not
  if (!lazyLoad) {
    yield put(orderHistoryActionsCreators.setLoading());
  }
  if (!lazyLoad || !orderHistoryListOver) {
    const res: OrderHistory[] = yield call(getOrderHistory, orderHistory.length, customerId);
    if (res.length < WOOCOMMERCE_PARAMS.DEFAULT_BATCH_SIZE_LOAD_PRODUCTS) {
      yield put(orderHistoryActionsCreators.setOrderHistoryOver());
    }
    yield put(orderHistoryActionsCreators.setOrderHistory(res, orderHistory.length));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(orderHistoryActions.GET_ORDER_HISTORY, GET_ORDER_HISTORY)]);
}
