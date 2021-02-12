import {
  PaymentAction,
  POST_ORDER,
  GET_ORDER_RESPONSE,
  CLEAR_CART,
  CLEAR_CART_RESPONSE,
} from '../actions/payment';
import PlaceOrder from '../../../../types/PlaceOrder';

export function postOrder(placeorder: PlaceOrder, screenName: string): PaymentAction {
  return {
    type: POST_ORDER,
    placeorder: placeorder,
    screenName: screenName,
  };
}

export function getOrderResponse(): PaymentAction {
  return {
    type: GET_ORDER_RESPONSE,
  };
}

export function clearCart(): PaymentAction {
  return {
    type: CLEAR_CART,
  };
}

export function clearCartResponse(response: string): PaymentAction {
  return {
    type: CLEAR_CART_RESPONSE,
    clearCartResponse: response,
  };
}
