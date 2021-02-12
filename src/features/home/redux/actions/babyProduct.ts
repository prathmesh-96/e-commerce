import Product from '../../../../types/Product';

export const GET_BABY_PRODUCTS = 'home/GET_BABY_PRODUCTS';
export const SET_BABY_PRODUCT = 'home/SET_BABY_PRODUCT';
export const CLEAR_BABY_PRODUCT = 'home/CLEAR_BABY_PRODUCT';
export const BABY_PRODUCTS_OVER = 'home/BABY_PRODUCTS_OVER';
export const SET_LOADING = 'home/SET_LOADING';

export interface GetBabyProductsAction {
  type: typeof GET_BABY_PRODUCTS;
  lazyLoad: boolean;
}

export interface BabyProductsSetStateAction {
  type: typeof SET_BABY_PRODUCT;
  payload: Product[];
  offset: number;
}

export interface BabyProductsClearStateAction {
  type: typeof CLEAR_BABY_PRODUCT;
}

export interface BabyProductsOverAction {
  type: typeof BABY_PRODUCTS_OVER;
}

export interface BabyProductsLoadAction {
  type: typeof SET_LOADING;
}

export type BabyProductActions =
  | GetBabyProductsAction
  | BabyProductsSetStateAction
  | BabyProductsClearStateAction
  | BabyProductsOverAction
  | BabyProductsLoadAction;
