import Product from '../../../../types/Product';

export const GET_PRODUCTS = 'home/GET_PRODUCTS';
export const SET_STATE = 'home/SET_STATE';
export const CLEAR_STATE = 'home/CLEAR_STATE';
export const PRODUCTS_OVER = 'home/PRODUCTS_OVER';
export const SET_LOADING = 'home/SET_LOADING';

export interface GetProductsAction {
  type: typeof GET_PRODUCTS;
  lazyLoad: boolean;
}

export interface ProductsSetStateAction {
  type: typeof SET_STATE;
  payload: Product[];
  offset: number;
}

export interface ProductsClearStateAction {
  type: typeof CLEAR_STATE;
}

export interface ProductsOverAction {
  type: typeof PRODUCTS_OVER;
}

export interface ProductsLoadAction {
  type: typeof SET_LOADING;
}

export type ProductActionType =
  | GetProductsAction
  | ProductsSetStateAction
  | ProductsClearStateAction
  | ProductsOverAction
  | ProductsLoadAction;
