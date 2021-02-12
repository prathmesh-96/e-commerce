import {
  updateCartProductsActions,
  GET_UPDATE_ORDERED_PRODUCTS,
  SET_UPDATE_ORDERED_PRODUCTS,
  CLEAR_UPDATE_ORDERED_PRODUCTS,
  UPDATE_ORDERED_PRODUCTS_OVER,
} from '../actions/updatecartProducts';
import CartProduct from '../../../../types/CartProduct';

export function getupdateCartProducts(lazyLoad: boolean): updateCartProductsActions {
  return {
    type: GET_UPDATE_ORDERED_PRODUCTS,
    lazyLoad: lazyLoad,
  };
}

export function setupdateCartProducts(
  orderProducts: CartProduct[],
  offset: number,
): updateCartProductsActions {
  return {
    type: SET_UPDATE_ORDERED_PRODUCTS,
    payload: orderProducts,
    offset: offset,
  };
}

export const clearupdateCartPrduct = (): updateCartProductsActions => ({
  type: CLEAR_UPDATE_ORDERED_PRODUCTS,
});

export const setupdateCartProductsOver = (): updateCartProductsActions => ({
  type: UPDATE_ORDERED_PRODUCTS_OVER,
});
