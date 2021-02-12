import PlaceOrder from '../../../../types/PlaceOrder';

export const POST_ORDER = 'selectAddress/POST_ORDER';
export const GET_ORDER_RESPONSE = 'selectAddress/GET_ORDER_RESPONSE';
export const CLEAR_CART = 'selectAddress/CLEAR_CART';
export const CLEAR_CART_RESPONSE = 'selectAddress/CLEAR_CART_RESPONSE';

export interface postOrderAction {
  type: typeof POST_ORDER;
  placeorder: PlaceOrder;
  screenName: string;
}

export interface getOrderResponseAction {
  type: typeof GET_ORDER_RESPONSE;
  // customerInfo: CustomerInfo
}

export interface clearCartAction {
  type: typeof CLEAR_CART;
}

export interface clearCartResponseAction {
  type: typeof CLEAR_CART_RESPONSE;
  clearCartResponse: string;
}

export type PaymentAction =
  | postOrderAction
  | getOrderResponseAction
  | clearCartAction
  | clearCartResponseAction;
