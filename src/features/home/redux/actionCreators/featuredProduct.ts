import {
  FeaturedProductActions,
  GET_FEATURED_PRODUCTS,
  SET_FEATURED_PRODUCT,
  CLEAR_FEATURED_PRODUCT,
  FEATURED_PRODUCTS_OVER,
  SET_LOADING,
} from '../actions/featuredProduct';
import Product from '../../../../types/Product';

export function getFeaturedProducts(lazyLoad: boolean): FeaturedProductActions {
  return {
    type: GET_FEATURED_PRODUCTS,
    lazyLoad: lazyLoad,
  };
}

export function setFeaturedProducts(
  featuredProducts: Product[],
  offset: number,
): FeaturedProductActions {
  return {
    type: SET_FEATURED_PRODUCT,
    payload: featuredProducts,
    offset: offset,
  };
}

export const clearFeaturedProducts = (): FeaturedProductActions => ({
  type: CLEAR_FEATURED_PRODUCT,
});

export const setFeaturedProductsOver = (): FeaturedProductActions => ({
  type: FEATURED_PRODUCTS_OVER,
});

export const setLoading = (): FeaturedProductActions => ({
  type: SET_LOADING,
});
