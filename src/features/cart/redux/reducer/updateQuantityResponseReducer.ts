import * as actions from '../actions/updateQuantity';

export interface quantityResponseState {
  updatedResponse: boolean;
}

const initialState: quantityResponseState = {
  updatedResponse: false,
};

export default function updateQuantityResponseReducer(
  state: quantityResponseState = initialState,
  action: actions.UpdateQuantityAction,
): quantityResponseState {
  switch (action.type) {
    case actions.GET_QUANTITY_UPDATE_RESPONSE:
      return {
        ...state,
        updatedResponse: action.updatedResponse,
      };
    default:
      return state;
  }
}
