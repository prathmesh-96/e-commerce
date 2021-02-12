import { AddToCartProducts } from '../../../../types/AddToCartProducts';

export const POST_ADD_TO_CART = 'productDetails/POST_ADD_TO_CART';
export const GET_RESPONSE = 'productDetails/GET_RESPONSE';

export interface postAddToCartAction {
  type: typeof POST_ADD_TO_CART;
  addToCartProducts: AddToCartProducts;
}

export interface getResponseAddToCart {
  type: typeof GET_RESPONSE;
  addCartResponse: boolean;
}

export type AddToCartAction = postAddToCartAction | getResponseAddToCart;
