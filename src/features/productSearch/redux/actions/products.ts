import Product from '../../../../types/Product';

export const GET_SEARCH_PRODUCTS = 'productSearch/GET_SEARCH_PRODUCTS';
export const SET_SEARCH_STATE = 'productSearch/SET_SEARCH_STATE';
export const CLEAR_SEARCH_STATE = 'productSearch/CLEAR_SEARCH_STATE';
export const SET_SEARCH_QUERY = 'productSearch/SET_SEARCH_QUERY';
export const SEARCH_PRODUCTS_OVER = 'productSearch/SEARCH_PRODUCTS_OVER';
export const SET_LOADING = 'productSearch/SET_LOADING';

export interface GetSearchProductsAction {
  type: typeof GET_SEARCH_PRODUCTS;
  searchText: string;
  lazyLoad: boolean;
}

export interface SearchProductsSetStateAction {
  type: typeof SET_SEARCH_STATE;
  payload: Product[];
  offset: number;
}

export interface SetSearchQueryAction {
  type: typeof SET_SEARCH_QUERY;
  searchQuery: string;
}

export interface SearchProductsClearStateAction {
  type: typeof CLEAR_SEARCH_STATE;
}

export interface SearchProductsOverAction {
  type: typeof SEARCH_PRODUCTS_OVER;
}

export interface SearchProductsLoadAction {
  type: typeof SET_LOADING;
}

export type SearchProductActionType =
  | GetSearchProductsAction
  | SearchProductsSetStateAction
  | SearchProductsClearStateAction
  | SearchProductsOverAction
  | SearchProductsLoadAction
  | SetSearchQueryAction;
