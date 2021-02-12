import OrderHistory from '../../../../types/OrderHistory';

export const GET_ORDER_HISTORY = 'orderHistory/GET_ORDER_HISTORY';
export const SET_ORDER_HISTORY = 'orderHistory/SET_ORDER_HISTORY';
export const CLEAR_ORDER_HISTORY = 'orderHistory/CLEAR_ORDER_HISTORY';
export const ORDER_HISTORY_OVER = 'orderHistory/ORDER_HISTORY_OVER';
export const SET_LOADING = 'orderHistory/SET_LOADING';

export interface GetOrderHistoryAction {
  type: typeof GET_ORDER_HISTORY;
  customerId: number;
  lazyLoad: boolean;
}

export interface SetOrderHistoryAction {
  type: typeof SET_ORDER_HISTORY;
  payload: OrderHistory[];
  offset: number;
}

export interface ClearOrderHistoryAction {
  type: typeof CLEAR_ORDER_HISTORY;
}

export interface OrderHistoryOverAction {
  type: typeof ORDER_HISTORY_OVER;
}

export interface OrderHistoryLoadAction {
  type: typeof SET_LOADING;
}

export type OrderHistoryActions =
  | GetOrderHistoryAction
  | SetOrderHistoryAction
  | ClearOrderHistoryAction
  | OrderHistoryOverAction
  | OrderHistoryLoadAction;
