import * as actions from '../actions/quantity';

export interface quantityState {
  quantity_count: number;
}

const initialState: quantityState = {
  quantity_count: 1,
};

export default function quantityCountReducer(
  state: quantityState = initialState,
  action: actions.QuantityAction,
): quantityState {
  switch (action.type) {
    case actions.SET_QUANTITY_COUNT:
      return {
        ...state,
        quantity_count: action.quantity_count,
      };
    case actions.CLEAR_QUANTITY_COUNT:
      return {
        quantity_count: initialState.quantity_count,
      };
    default:
      return state;
  }
}
