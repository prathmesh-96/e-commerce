import {
  cartDeleteProductsActions,
  DELETE_PRODUCTS,
  SET_DELETE_PRODUCTS,
} from '../actions/cartDeleteProduct';

export function getCartDeleteProducts(key: string): cartDeleteProductsActions {
  return {
    type: DELETE_PRODUCTS,
    key: key,
  };
}

export function setCartDeleteProducts(reply: string): cartDeleteProductsActions {
  return {
    type: SET_DELETE_PRODUCTS,
    payload: reply,
  };
}
