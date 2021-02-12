import Product from '../../../../types/Product';

export const GET_PRODUCTSBYCATEGORY = 'category/GET_PRODUCTSBYCATEGORY';
export const SET_STATE = 'category/SET_STATE';
export const CLEAR_STATE = 'category/CLEAR_STATE';
export const PRODUCTSBYCATEGORY_OVER = 'category/PRODUCTS_OVER';
export const SET_LOADING = 'category/SET_LOADING';

export interface GetProductsByCategoryAction {
  type: typeof GET_PRODUCTSBYCATEGORY;
  categoryId: number;
  lazyLoad: boolean;
}

export interface ProductsByCategorySetStateAction {
  type: typeof SET_STATE;
  payload: Product[];
  offset: number;
}

export interface ProductsByCategoryClearStateAction {
  type: typeof CLEAR_STATE;
}

export interface ProductsByCategoryOverAction {
  type: typeof PRODUCTSBYCATEGORY_OVER;
}

export interface ProductsByCategoryLoadAction {
  type: typeof SET_LOADING;
}

export type CategoryActionType =
  | GetProductsByCategoryAction
  | ProductsByCategorySetStateAction
  | ProductsByCategoryClearStateAction
  | ProductsByCategoryOverAction
  | ProductsByCategoryLoadAction;
