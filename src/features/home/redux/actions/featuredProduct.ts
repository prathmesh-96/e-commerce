import Product from '../../../../types/Product';

export const GET_FEATURED_PRODUCTS = 'home/GET_FEATURED_PRODUCTS';
export const SET_FEATURED_PRODUCT = 'home/SET_FEATURED_PRODUCT';
export const CLEAR_FEATURED_PRODUCT = 'home/CLEAR_FEATURED_PRODUCT';
export const FEATURED_PRODUCTS_OVER = 'home/FEATURED_PRODUCTS_OVER';
export const SET_LOADING = 'home/SET_LOADING';

export interface GetFeaturedProductsAction {
  type: typeof GET_FEATURED_PRODUCTS;
  lazyLoad: boolean;
}

export interface FeaturedProductsSetStateAction {
  type: typeof SET_FEATURED_PRODUCT;
  payload: Product[];
  offset: number;
}

export interface FeaturedProductsClearStateAction {
  type: typeof CLEAR_FEATURED_PRODUCT;
}

export interface FeaturedProductsOverAction {
  type: typeof FEATURED_PRODUCTS_OVER;
}

export interface FeaturedProductsLoadAction {
  type: typeof SET_LOADING;
}

export type FeaturedProductActions =
  | GetFeaturedProductsAction
  | FeaturedProductsSetStateAction
  | FeaturedProductsClearStateAction
  | FeaturedProductsOverAction
  | FeaturedProductsLoadAction;
