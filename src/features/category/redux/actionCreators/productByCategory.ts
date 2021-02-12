import {
  CategoryActionType,
  GET_PRODUCTSBYCATEGORY,
  SET_STATE,
  CLEAR_STATE,
  PRODUCTSBYCATEGORY_OVER,
  SET_LOADING,
} from '../actions/productByCategory';
import Product from '../../../../types/Product';
import { categoryPageProductsListOver } from '../sagas';

export function getProductsByCategory(categoryId: number, lazyLoad: boolean): CategoryActionType {
  return {
    type: GET_PRODUCTSBYCATEGORY,
    categoryId: categoryId,
    lazyLoad: lazyLoad,
  };
}

export function setPopularProducts(products: Product[], offset: number): CategoryActionType {
  return {
    type: SET_STATE,
    payload: products,
    offset: offset,
  };
}

export const clearProductsByCategory = (): CategoryActionType => ({
  type: CLEAR_STATE,
});

export const setProductsByCategoryOver = (): CategoryActionType => ({
  type: PRODUCTSBYCATEGORY_OVER,
});

export const setLoading = (): CategoryActionType => ({
  type: SET_LOADING,
});
