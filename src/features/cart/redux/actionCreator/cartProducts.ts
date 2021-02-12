import {
  cartProductsActions,
  GET_ORDERED_PRODUCTS,
  SET_ORDERED_PRODUCTS,
  CLEAR_ORDERED_PRODUCTS,
  ORDERED_PRODUCTS_OVER,
  SET_LOADING,
} from '../actions/cartProducts';
import CartProduct from '../../../../types/CartProduct';

export function getCartProducts(lazyLoad: boolean): cartProductsActions {
  return {
    type: GET_ORDERED_PRODUCTS,
    lazyLoad: lazyLoad,
  };
}

export function setCartProducts(orderProducts: CartProduct[], offset: number): cartProductsActions {
  return {
    type: SET_ORDERED_PRODUCTS,
    payload: orderProducts,
    offset: offset,
  };
}

export const clearCartProduct = (): cartProductsActions => ({
  type: CLEAR_ORDERED_PRODUCTS,
});

export const setCartProductsOver = (): cartProductsActions => ({
  type: ORDERED_PRODUCTS_OVER,
});

export const setLoading = (): cartProductsActions => ({
  type: SET_LOADING,
});
