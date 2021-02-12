import {
  SearchProductActionType,
  GET_SEARCH_PRODUCTS,
  SET_SEARCH_STATE,
  SET_SEARCH_QUERY,
  CLEAR_SEARCH_STATE,
  SEARCH_PRODUCTS_OVER,
  SET_LOADING,
} from '../actions/products';
import Product from '../../../../types/Product';

export function getSearchProducts(searchText: string, lazyLoad: boolean): SearchProductActionType {
  return {
    type: GET_SEARCH_PRODUCTS,
    searchText: searchText,
    lazyLoad: lazyLoad,
  };
}

export function setSearchProducts(products: Product[], offset: number): SearchProductActionType {
  return {
    type: SET_SEARCH_STATE,
    payload: products,
    offset: offset,
  };
}

export function setSearchQuery(searchQuery: string): SearchProductActionType {
  return {
    type: SET_SEARCH_QUERY,
    searchQuery: searchQuery,
  };
}

export const clearSearchProducts = (): SearchProductActionType => ({
  type: CLEAR_SEARCH_STATE,
});

export const setSearchProductsOver = (): SearchProductActionType => ({
  type: SEARCH_PRODUCTS_OVER,
});

export const setLoading = (): SearchProductActionType => ({
  type: SET_LOADING,
});
