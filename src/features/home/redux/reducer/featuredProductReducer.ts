import * as actions from '../actions/featuredProduct';
import Product from '../../../../types/Product';

export interface FeaturedProductsState {
  featuredProducts: Product[];
  offset: number;
  featuredProductsOver?: boolean;
  isLoading?: boolean;
}

const initialState: FeaturedProductsState = {
  featuredProducts: [],
  offset: 0,
  featuredProductsOver: false,
  isLoading: false,
};

export default function featuredProductReducer(
  state: FeaturedProductsState = initialState,
  action: actions.FeaturedProductActions,
): FeaturedProductsState {
  switch (action.type) {
    case actions.CLEAR_FEATURED_PRODUCT:
      return initialState;
    case actions.SET_FEATURED_PRODUCT:
      return {
        ...state,
        featuredProducts: state.featuredProducts.concat(action.payload),
        offset: state.offset + action.offset,
        isLoading: false,
      };
    case actions.FEATURED_PRODUCTS_OVER:
      return { ...state, featuredProductsOver: true };
    case actions.SET_LOADING:
      return { ...initialState, isLoading: true };
    default:
      return state;
  }
}
