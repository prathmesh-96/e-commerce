import { AddToCartAction, POST_ADD_TO_CART, GET_RESPONSE } from '../actions/addToCart';
import { AddToCartProducts } from '../../../../types/AddToCartProducts';

export function postAddToCart(addToCartProducts: AddToCartProducts): AddToCartAction {
  console.log('POST_ADD_TO_CART');
  return {
    type: POST_ADD_TO_CART,
    addToCartProducts: addToCartProducts,
  };
}

export function getAddToCartResponse(addCartResponse: boolean): AddToCartAction {
  return {
    type: GET_RESPONSE,
    addCartResponse: addCartResponse,
  };
}
