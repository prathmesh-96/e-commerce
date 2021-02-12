import * as actions from '../actions/cartBadge';

export interface cartBadgeState {
  cartItemCount: number;
}

const initialState: cartBadgeState = {
  cartItemCount: 0,
};

export default function cartBadgeReducer(
  state: cartBadgeState = initialState,
  action: actions.CartItemCountAction,
): cartBadgeState {
  switch (action.type) {
    case actions.SET_CART_ITEM_COUNT:
      return {
        ...state,
        cartItemCount: action.payload,
      };
    default:
      return state;
  }
}
