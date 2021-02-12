import CartProduct from '../../../../types/CartProduct';

export const GET_ORDERED_PRODUCTS = 'cart/GET_ORDERED_PRODUCTS';
export const SET_ORDERED_PRODUCTS = 'cart/SET_ORDERED_PRODUCTS';
export const CLEAR_ORDERED_PRODUCTS = 'cart/CLEAR_ORDERED_PRODUCTS';
export const ORDERED_PRODUCTS_OVER = 'cart/ORDERED_PRODUCTS_OVER';

export const SET_LOADING = 'cart/SET_LOADING';

export interface GetCartproductsAction {
  type: typeof GET_ORDERED_PRODUCTS;
  lazyLoad: boolean;
}

export interface SetCartproductsAction {
  type: typeof SET_ORDERED_PRODUCTS;
  payload: CartProduct[];
  offset: number;
}

export interface ClearCartproductsAction {
  type: typeof CLEAR_ORDERED_PRODUCTS;
}

export interface CartproductsOverAction {
  type: typeof ORDERED_PRODUCTS_OVER;
}

export interface CartproductsLoadAction {
  type: typeof SET_LOADING;
}

export type cartProductsActions =
  | GetCartproductsAction
  | SetCartproductsAction
  | ClearCartproductsAction
  | CartproductsOverAction
  | CartproductsLoadAction;
