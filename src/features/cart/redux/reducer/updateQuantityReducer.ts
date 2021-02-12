import * as actions from '../actions/updateQuantity';
import UpdateCartProducts from '../../../../types/UpdateCartProducts';

export interface updateQuantityState {
  updateCartProduct: UpdateCartProducts;
}

const initialState: updateQuantityState = {
  updateCartProduct: null,
};

export default function updateQuantityReducer(
  state: updateQuantityState = initialState,
  action: actions.updateQuantityAction,
): updateQuantityState {
  switch (action.type) {
    case actions.UPDATE_QUANTITY:
      return {
        ...state,
        updateCartProduct: action.updateCartProduct,
      };
    default:
      return state;
  }
}
