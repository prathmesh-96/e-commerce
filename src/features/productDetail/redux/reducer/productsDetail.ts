import * as actions from '../actions/productsDetail';
import Product, { Reviews, similarOptionProduct } from '../../../../types/Product';

export interface ProductsState {
  products: Product[];
  offset: number;
  productsOver?: boolean;
  similarProduct: similarOptionProduct[];
  reviews: Reviews[];
}

const initialState: ProductsState = {
  products: [],
  offset: 0,
  productsOver: false,
  similarProduct: [],
  reviews: [],
};

export default function productDetailReducer(
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
      };
    case actions.SIMILAR_OPTION_SET_STATE:
      return {
        ...state,
        similarProduct: state.similarProduct.concat(action.payload),
      };
    case actions.REVIWES_SET_STATE:
      return {
        ...state,
        reviews: state.reviews.concat(action.payload),
      };
    case actions.PRODUCTS_OVER:
      return { ...state, productsOver: true };
    default:
      return state;
  }
}
