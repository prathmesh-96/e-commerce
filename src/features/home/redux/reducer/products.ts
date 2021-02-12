import * as actions from '../actions/products';
import Product from '../../../../types/Product';

export interface ProductsState {
  products: Product[];
  offset: number;
  productsOver?: boolean;
  isLoading?: boolean;
}

const initialState: ProductsState = {
  products: [],
  offset: 0,
  productsOver: false,
  isLoading: false,
};

export default function homeReducer(
  state: ProductsState = initialState,
  action: actions.ProductActionType,
): ProductsState {
  switch (action.type) {
    case actions.CLEAR_STATE:
      return initialState;
    case actions.SET_STATE:
      return {
        ...state,
        products: state.products.concat(action.payload),
        offset: state.offset + action.offset,
        isLoading: false,
      };
    case actions.PRODUCTS_OVER:
      return { ...state, productsOver: true };
    case actions.SET_LOADING:
      return { ...initialState, isLoading: true };
    default:
      return state;
  }
}
