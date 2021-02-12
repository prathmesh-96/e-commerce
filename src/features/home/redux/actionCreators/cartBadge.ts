import {
  CartItemCountAction,
  GET_CART_ITEM_COUNT,
  SET_CART_ITEM_COUNT,
} from '../actions/cartBadge';

export function getCartItemCount(): CartItemCountAction {
  return {
    type: GET_CART_ITEM_COUNT,
  };
}

export function setCartItemCount(cartItemCount: number): CartItemCountAction {
  return {
    type: SET_CART_ITEM_COUNT,
    payload: cartItemCount,
  };
}
