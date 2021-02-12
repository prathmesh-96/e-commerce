import CartProduct from '../../../../types/CartProduct';

export const GET_UPDATE_ORDERED_PRODUCTS = 'cart/GET_UPDATE_ORDERED_PRODUCTS';
export const SET_UPDATE_ORDERED_PRODUCTS = 'cart/SET_UPDATE_ORDERED_PRODUCTS';
export const CLEAR_UPDATE_ORDERED_PRODUCTS = 'cart/CLEAR_UPDATE_ORDERED_PRODUCTS';
export const UPDATE_ORDERED_PRODUCTS_OVER = 'cart/UPDATE_ORDERED_PRODUCTS_OVER';

export interface GetUpdateCartproductsAction {
  type: typeof GET_UPDATE_ORDERED_PRODUCTS;
  lazyLoad: boolean;
}

export interface SetUpdateCartproductsAction {
  type: typeof SET_UPDATE_ORDERED_PRODUCTS;
  payload: CartProduct[];
  offset: number;
}

export interface ClearUpdateCartproductsAction {
  type: typeof CLEAR_UPDATE_ORDERED_PRODUCTS;
}

export interface UpdateCartproductsOverAction {
  type: typeof UPDATE_ORDERED_PRODUCTS_OVER;
}

export type updateCartProductsActions =
  | GetUpdateCartproductsAction
  | SetUpdateCartproductsAction
  | ClearUpdateCartproductsAction
  | UpdateCartproductsOverAction;
