import {
  UpdateQuantityAction,
  UPDATE_QUANTITY,
  GET_QUANTITY_UPDATE_RESPONSE,
} from '../actions/updateQuantity';
import UpdateCartProducts from '../../../../types/UpdateCartProducts';

export function updateQuantity(updateCartProduct: UpdateCartProducts): UpdateQuantityAction {
  return {
    type: UPDATE_QUANTITY,
    updateCartProduct: updateCartProduct,
  };
}

export function updateQuantityResponseAction(updatedResponse: boolean): UpdateQuantityAction {
  return {
    type: GET_QUANTITY_UPDATE_RESPONSE,
    updatedResponse: updatedResponse,
  };
}
