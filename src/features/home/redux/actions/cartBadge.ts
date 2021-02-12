import { SET_QUANTITY_COUNT } from '../../../productDetail/redux/actions/quantity';

export const GET_CART_ITEM_COUNT = 'home/GET_CART_ITEM_COUNT';
export const SET_CART_ITEM_COUNT = 'home/SET_CART_ITEM_COUNT';

export interface GetCartItemCountAction {
  type: typeof GET_CART_ITEM_COUNT;
}
export interface SetCartItemCountAction {
  type: typeof SET_CART_ITEM_COUNT;
  payload: number;
}

export type CartItemCountAction = GetCartItemCountAction | SetCartItemCountAction;
