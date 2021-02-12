import CartTotal from '../../../../types/CartTotal';
import * as actions from '../actions/cartTotal';

export interface cartTotalState {
  cartTotal: CartTotal;
}

const initialState: cartTotalState = {
  cartTotal: null,
};

export default function cartTotalReducer(
  state: cartTotalState = initialState,
  action: actions.cartTotalActions,
): cartTotalState {
  switch (action.type) {
    case actions.CLEAR_CART_TOTAL:
      return initialState;
    case actions.SET_TOTAL:
      return {
        ...state,
        cartTotal: action.payload,
      };
    default:
      return state;
  }
}
