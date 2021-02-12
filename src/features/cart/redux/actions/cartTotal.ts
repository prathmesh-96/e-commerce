import CartTotal from '../../../../types/CartTotal';

export const GET_TOTAL = 'cart/GET_TOTAL';
export const SET_TOTAL = 'cart/SET_TOTAL';
export const CLEAR_CART_TOTAL = 'cart/CLEAR_CART_TOTAL';

export interface GetCartTotalAction {
  type: typeof GET_TOTAL;
}

export interface SetCartTotalAction {
  type: typeof SET_TOTAL;
  payload: CartTotal;
}

export interface ClearCartTotalsAction {
  type: typeof CLEAR_CART_TOTAL;
}

export type cartTotalActions = SetCartTotalAction | GetCartTotalAction | ClearCartTotalsAction;
