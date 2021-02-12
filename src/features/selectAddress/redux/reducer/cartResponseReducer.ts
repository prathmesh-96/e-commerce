import * as actions from '../actions/payment';

export interface cartReponseState {
  clearCartResponse: string;
}

const initialState: cartReponseState = {
  clearCartResponse: null,
};

export default function cartResponseReducer(
  state: cartReponseState = initialState,
  action: actions.PaymentAction,
): cartReponseState {
  switch (action.type) {
    case actions.CLEAR_CART_RESPONSE:
      return {
        ...state,
        clearCartResponse: action.clearCartResponse,
      };
    default:
      return state;
  }
}
