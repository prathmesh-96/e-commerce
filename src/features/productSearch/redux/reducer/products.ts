import * as actions from '../actions/products';
import Product from '../../../../types/Product';

export interface SearchProductsState {
  products: Product[];
  offset: number;
  productsOver?: boolean;
  isLoading?: boolean;
  searchQuery: string;
}

const initialState: SearchProductsState = {
  products: [],
  offset: 0,
  productsOver: false,
  isLoading: false,
  searchQuery: '',
};

export default function searchProductReducer(
  state: SearchProductsState = initialState,
  action: actions.SearchProductActionType,
): SearchProductsState {
  switch (action.type) {
    case actions.CLEAR_SEARCH_STATE:
      return initialState;
    case actions.SET_SEARCH_STATE:
      return {
        ...state,
        products: state.products.concat(action.payload),
        offset: state.offset + action.offset,
        isLoading: false,
      };
    case actions.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.searchQuery,
      };
    case actions.SEARCH_PRODUCTS_OVER:
      return { ...state, productsOver: true };
    case actions.SET_LOADING:
      return { ...initialState, isLoading: true, searchQuery: state.searchQuery };
    default:
      return state;
  }
}
