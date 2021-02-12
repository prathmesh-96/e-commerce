import { cartTotalActions, GET_TOTAL, SET_TOTAL, CLEAR_CART_TOTAL } from '../actions/cartTotal';
import CartTotal from '../../../../types/CartTotal';

export function getCartTotal(): cartTotalActions {
  return {
    type: GET_TOTAL,
  };
}

export function setCartTotal(cartTotal: CartTotal): cartTotalActions {
  return {
    type: SET_TOTAL,
    payload: cartTotal,
  };
}

export const clearCartTotal = (): cartTotalActions => ({
  type: CLEAR_CART_TOTAL,
});
