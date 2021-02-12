import CartProduct from '../../../../types/CartProduct';
import * as actions from '../actions/updatecartProducts';

export interface updatecartProductState {
  orderProducts: CartProduct[];
  offset: number;
  cartProductsOver?: boolean;
}

const initialState: updatecartProductState = {
  orderProducts: [],
  offset: 0,
  cartProductsOver: false,
};

export default function updatecartProductsReducer(
  state: updatecartProductState = initialState,
  action: actions.updateCartProductsActions,
): updatecartProductState {
  switch (action.type) {
    case actions.CLEAR_UPDATE_ORDERED_PRODUCTS:
      return initialState;
    case actions.SET_UPDATE_ORDERED_PRODUCTS:
      return {
        ...state,
        orderProducts: action.payload,
        offset: state.offset + action.offset,
      };
    case actions.UPDATE_ORDERED_PRODUCTS_OVER:
      return { ...state, cartProductsOver: true };
    default:
      return state;
  }
}
