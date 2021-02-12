import UpdateCartProducts from '../../../../types/UpdateCartProducts';

export const UPDATE_QUANTITY = 'cart/UPDATE_QUANTITY';
export const GET_QUANTITY_UPDATE_RESPONSE = 'cart/GET_QUANTITY_UPDATE_RESPONSE';

export interface updateQuantityAction {
  type: typeof UPDATE_QUANTITY;
  updateCartProduct: UpdateCartProducts;
}

export interface updateQuantityResponseAction {
  type: typeof GET_QUANTITY_UPDATE_RESPONSE;
  updatedResponse: boolean;
}

export type UpdateQuantityAction = updateQuantityAction | updateQuantityResponseAction;
