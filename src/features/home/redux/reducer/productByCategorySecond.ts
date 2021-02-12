import * as actions from '../actions/secondCategory';
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

export default function categorySecondReducer(
  state: ProductsState = initialState,
  action: actions.SecondCategoryActionType,
): ProductsState {
  switch (action.type) {
    case actions.CLEAR_SECOND_CATEGORY:
      return initialState;
    case actions.SET_SECOND_CATEGORY:
      return {
        ...state,
        products: state.products.concat(action.payload),
        offset: state.offset + action.offset,
        isLoading: false,
      };
    case actions.SECOND_CATEGORY_OVER:
      return { ...state, productsOver: true };
    case actions.SET_SECOND_LOADING:
      return { ...initialState, isLoading: true };
    default:
      return state;
  }
}
