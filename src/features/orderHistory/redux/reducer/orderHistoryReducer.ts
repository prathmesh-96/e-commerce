import * as actions from '../actions/orderHistory';
import OrderHistory from '../../../../types/OrderHistory';

export interface orderHistoryState {
  orderHistories: OrderHistory[];
  offset: number;
  orderHistoryOver?: boolean;
  isLoading?: boolean;
}

const initialState: orderHistoryState = {
  orderHistories: [],
  offset: 0,
  orderHistoryOver: false,
  isLoading: false,
};

export default function orderHistoryReducer(
  state: orderHistoryState = initialState,
  action: actions.OrderHistoryActions,
): orderHistoryState {
  switch (action.type) {
    case actions.CLEAR_ORDER_HISTORY:
      return initialState;
    case actions.SET_ORDER_HISTORY:
      return {
        ...state,
        orderHistories: state.orderHistories.concat(action.payload),
        offset: state.offset + action.offset,
        isLoading: false,
      };
    case actions.ORDER_HISTORY_OVER:
      return { ...state, orderHistoryOver: true };
    case actions.SET_LOADING:
      return { ...initialState, isLoading: true };
    default:
      return state;
  }
}
