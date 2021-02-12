import * as actions from '../actions/babyProduct';
import Product from '../../../../types/Product';

export interface BabyProductsState {
  babyProducts: Product[];
  offset: number;
  babyProductsOver?: boolean;
  isLoading?: boolean;
}

const initialState: BabyProductsState = {
  babyProducts: [],
  offset: 0,
  babyProductsOver: false,
  isLoading: false,
};

export default function babyProductReducer(
  state: BabyProductsState = initialState,
  action: actions.BabyProductActions,
): BabyProductsState {
  switch (action.type) {
    case actions.CLEAR_BABY_PRODUCT:
      return initialState;
    case actions.SET_BABY_PRODUCT:
      return {
        ...state,
        babyProducts: state.babyProducts.concat(action.payload),
        offset: state.offset + action.offset,
        isLoading: false,
      };
    case actions.BABY_PRODUCTS_OVER:
      return { ...state, babyProductsOver: true };
    case actions.SET_LOADING:
      return { ...initialState, isLoading: true };
    default:
      return state;
  }
}
