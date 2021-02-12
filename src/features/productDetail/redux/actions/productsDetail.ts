import Product, { Reviews, similarOptionProduct } from '../../../../types/Product';

export const GET_PRODUCTS_DETAIL = 'productDetail/GET_PRODUCTS_DETAIL';
export const SET_STATE = 'productDetail/SET_STATE';
export const SIMILAR_OPTION_SET_STATE = 'productDetail/SIMILAR_OPTION_SET_STATE';
export const CLEAR_STATE = 'productDetail/CLEAR_STATE';
export const PRODUCTS_OVER = 'productDetail/PRODUCTS_OVER';
export const REVIWES_SET_STATE = 'productDetail/REVIWES_SET_STATE';

export interface GetProductsAction {
  type: typeof GET_PRODUCTS_DETAIL;
  productId: number;
  related_id: number;
}

export interface ProductsSetStateAction {
  type: typeof SET_STATE;
  payload: Product[];
  offset: number;
}

export interface SimilarProductsSetStateAction {
  type: typeof SIMILAR_OPTION_SET_STATE;
  payload: similarOptionProduct[];
}

export interface ReviewSetStateAction {
  type: typeof REVIWES_SET_STATE;
  payload: Reviews[];
}

export interface ProductsClearStateAction {
  type: typeof CLEAR_STATE;
}

export interface ProductsOverAction {
  type: typeof PRODUCTS_OVER;
}

export type ProductActionType =
  | GetProductsAction
  | ProductsSetStateAction
  | ProductsClearStateAction
  | ProductsOverAction
  | SimilarProductsSetStateAction
  | ReviewSetStateAction;
