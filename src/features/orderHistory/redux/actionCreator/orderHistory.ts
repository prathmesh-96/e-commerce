import {
  OrderHistoryActions,
  GET_ORDER_HISTORY,
  SET_ORDER_HISTORY,
  CLEAR_ORDER_HISTORY,
  ORDER_HISTORY_OVER,
  SET_LOADING,
} from '../actions/orderHistory';
import OrderHistory from '../../../../types/OrderHistory';

export function getOrderHistory(customerId: number, lazyLoad: boolean): OrderHistoryActions {
  return {
    type: GET_ORDER_HISTORY,
    customerId: customerId,
    lazyLoad: lazyLoad,
  };
}

export function setOrderHistory(
  orderHistories: OrderHistory[],
  offset: number,
): OrderHistoryActions {
  return {
    type: SET_ORDER_HISTORY,
    payload: orderHistories,
    offset: offset,
  };
}

export const clearOrderHistory = (): OrderHistoryActions => ({
  type: CLEAR_ORDER_HISTORY,
});

export const setOrderHistoryOver = (): OrderHistoryActions => {
  return {
    type: ORDER_HISTORY_OVER,
  };
};

export const setLoading = (): OrderHistoryActions => ({
  type: SET_LOADING,
});
