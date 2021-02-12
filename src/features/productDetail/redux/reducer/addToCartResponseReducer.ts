import * as actions from '../actions/addToCart';

export interface cartResponseState {
  addToCartResponse: boolean;
}

const initialState: cartResponseState = {
  addToCartResponse: false,
};

export default function addToCartResponseReducer(
  state: cartResponseState = initialState,
  action: actions.AddToCartAction,
): cartResponseState {
  switch (action.type) {
    case actions.GET_RESPONSE:
      return {
        ...state,
        addToCartResponse: action.addCartResponse,
      };
    default:
      return state;
  }
}
