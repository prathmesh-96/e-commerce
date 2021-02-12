import * as actions from '../actions/addToCart';
import { AddToCartProducts } from '../../../../types/AddToCartProducts';

export interface addToCartState {
  addToCartProducts: AddToCartProducts;
}

const initialState: addToCartState = {
  addToCartProducts: null,
};

export default function addToCartReducer(
  state: addToCartState = initialState,
  action: actions.AddToCartAction,
): addToCartState {
  switch (action.type) {
    case actions.POST_ADD_TO_CART:
      return {
        ...state,
        addToCartProducts: action.addToCartProducts,
      };
    default:
      return state;
  }
}
