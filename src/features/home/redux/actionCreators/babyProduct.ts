import {
  BabyProductActions,
  GET_BABY_PRODUCTS,
  SET_BABY_PRODUCT,
  CLEAR_BABY_PRODUCT,
  BABY_PRODUCTS_OVER,
  SET_LOADING,
} from '../actions/babyProduct';
import Product from '../../../../types/Product';

export function getBabyProducts(lazyLoad: boolean): BabyProductActions {
  return {
    type: GET_BABY_PRODUCTS,
    lazyLoad: lazyLoad,
  };
}

export function setBabyProducts(babyProducts: Product[], offset: number): BabyProductActions {
  return {
    type: SET_BABY_PRODUCT,
    payload: babyProducts,
    offset: offset,
  };
}

export const clearBabyProducts = (): BabyProductActions => ({
  type: CLEAR_BABY_PRODUCT,
});

export const setBabyProductsOver = (): BabyProductActions => ({
  type: BABY_PRODUCTS_OVER,
});

export const setLoading = (): BabyProductActions => ({
  type: SET_LOADING,
});
