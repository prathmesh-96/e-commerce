import CartProduct from '../../../../types/CartProduct';
import * as actions from '../actions/cartProducts';

export interface cartProductState {
  orderProducts: CartProduct[];
  offset: number;
  cartProductsOver?: boolean;
  isLoading?: boolean;
}

const initialState: cartProductState = {
  orderProducts: [],
  offset: 0,
  cartProductsOver: false,
  isLoading: false,
};

export default function cartProductsReducer(
  state: cartProductState = initialState,
  action: actions.cartProductsActions,
): cartProductState {
  switch (action.type) {
    case actions.CLEAR_ORDERED_PRODUCTS:
      return initialState;
    case actions.SET_ORDERED_PRODUCTS:
      return {
        ...state,
        orderProducts: state.orderProducts.concat(action.payload),
        offset: state.offset + action.offset,
        isLoading: false,
      };
    case actions.ORDERED_PRODUCTS_OVER:
      return { ...state, cartProductsOver: true };
    case actions.SET_LOADING:
      return { ...initialState, isLoading: true };
    default:
      return state;
  }
}
