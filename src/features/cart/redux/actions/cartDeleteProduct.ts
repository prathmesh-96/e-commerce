export const DELETE_PRODUCTS = 'cart/GET_DELETE_PRODUCTS';
export const SET_DELETE_PRODUCTS = 'cart/SET_DELETE_PRODUCTS';

export interface GetCartDeleteproductsAction {
  type: typeof DELETE_PRODUCTS;
  key: string;
}

export interface SetCartDeleteproductsAction {
  type: typeof SET_DELETE_PRODUCTS;
  payload: string;
}

export type cartDeleteProductsActions = GetCartDeleteproductsAction | SetCartDeleteproductsAction;
