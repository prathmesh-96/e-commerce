import * as actions from '../actions/cartDeleteProduct';

export interface cartDeleteProductState {
  reply: string;
}

const initialState: cartDeleteProductState = {
  reply: '',
};

export default function cartDeleteProductReducer(
  state: cartDeleteProductState = initialState,
  action: actions.cartDeleteProductsActions,
): cartDeleteProductState {
  switch (action.type) {
    case actions.SET_DELETE_PRODUCTS:
      return {
        ...state,
        reply: action.payload,
      };
    default:
      return state;
  }
}
