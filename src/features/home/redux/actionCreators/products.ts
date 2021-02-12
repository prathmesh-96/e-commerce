import {
  ProductActionType,
  GET_PRODUCTS,
  SET_STATE,
  CLEAR_STATE,
  PRODUCTS_OVER,
  SET_LOADING,
} from '../actions/products';
import Product from '../../../../types/Product';

export function getProducts(lazyLoad: boolean): ProductActionType {
  return {
    type: GET_PRODUCTS,
    lazyLoad: lazyLoad,
  };
}

export function setPopularProducts(products: Product[], offset: number): ProductActionType {
  return {
    type: SET_STATE,
    payload: products,
    offset: offset,
  };
}

export const clearPopularProducts = (): ProductActionType => ({
  type: CLEAR_STATE,
});

export const setPopularProductsOver = (): ProductActionType => ({
  type: PRODUCTS_OVER,
});

export const setLoading = (): ProductActionType => ({
  type: SET_LOADING,
});
